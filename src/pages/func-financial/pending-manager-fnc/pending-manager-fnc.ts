import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-pending-manager-fnc',
  templateUrl: 'pending-manager-fnc.html',
})
export class PendingManagerFncPage {

  userType
  page = 1
  public hasMoreData = true
  fnc: string[] = []

  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getFnc();
  }

  transformRecType(i) {
    switch (i) {
      case 0:
        return "材料开销费";
      case 1:
        return "机械完工费";
      case 2:
        return "人工完工费";
      case 3:
        return "其他费用";
    }
  }

  transformState(i) {
    switch (i) {
      case 0:
        return "待项目经理审核";
      case 1:
        return "待财务审核员审核";
      case 2:
        return "完全过审";
      case 10:
        return "该记录被拒绝";
    }
  }

  getFnc(scroll?) {


    let url = '';

    switch (this.userType) {
      case 2:
        url = 'manager/record/list.do';
        break;
      case 3:
        url = 'uploader/record/list.do';
        break;
    }


    this.http.doGet(`${url}?state=0&pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.fnc = res.data.list;
      } else {
        this.fnc = this.fnc.concat(res.data.list);
      }
      if (scroll) {
        scroll.complete();
        if (res.data.list.length < 30) {
          this.hasMoreData = false;
        }
      }
      this.page++;
    });
  }

  doLoadMore(scroll) {
    this.getFnc(scroll);
  }


  toFncDet(recordId) {
    this.navCtrl.push("FncDetPage", {
      recordId: recordId
    });
  }

  toSearchFnc() {
    this.navCtrl.push("SearchFncPage", {
      state: 0
    });
  }

}
