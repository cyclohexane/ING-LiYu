import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-partial-fnc',
  templateUrl: 'partial-fnc.html',
})
export class PartialFncPage {

  userType
  condition
  title
  page = 1
  public hasMoreData = true
  fnc: string[] = []

  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.condition = this.navParams.get('condition');
  }

  ionViewWillEnter() {
    this.title = this.setTitle(this.condition);
    this.page = 1;
    this.getFnc();
  }

  setTitle(i) {
    switch (i) {
      case 'state=0':
        return "待项目经理审核财务";
      case 'state=1':
        return "待公司财务审核财务";
      case 'state=2':
        return "审核通过财务";
      case 'state=10':
        return "被驳回财务";
    }
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
      case 0:
        url = 'boss/record/list.do?';
        break;
      case 1:
        url = 'financial/record/list.do?';
        break;
      case 2:
        url = 'manager/record/list.do?';
        break;
      case 3:
        url = 'uploader/record/list.do?';
        break;
    }


    this.http.doGet(`${url}${this.condition}&pageSize=30&pageNum=${this.page}`, res => {
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
      condition: this.condition
    });
  }

}
