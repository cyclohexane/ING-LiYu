import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';


@IonicPage()
@Component({
  selector: 'page-all-fnc',
  templateUrl: 'all-fnc.html',
})
export class AllFncPage {

  userType
  page = 1
  public hasMoreData = true
  fnc: string[] = []
  pro = []
  proCondition
  typeCondition
  stateCondition

  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getFnc();
    if (this.userType === 0 || this.userType === 1) this.getPro();
  }

  reload() {
    this.page = 1;
    this.getFnc();
    this.hasMoreData = true;
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

    url += this.proCondition || "";
    url += this.typeCondition || "";
    url += this.stateCondition || "";

    this.http.doGet(`${url}pageSize=30&pageNum=${this.page}`, res => {
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

  toFncDet(recordId) {
    this.navCtrl.push("FncDetPage", {
      recordId: recordId
    });
  }

  toSearchFnc() {
    let condition = '';
    // condition += this.proCondition || "";
    // condition += this.typeCondition || "";
    // condition += this.stateCondition || "";
    this.navCtrl.push("SearchFncPage", {
      condition: condition
    });
  }

  getPro() {

    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/item/listitem.do';
        break;
      case 1:
        url = 'financial/item/listitem.do';
        break;
    }
    this.http.doGet(`${url}?pageSize=100&pageNum=1`, res => {
      this.pro = res.data.list;
    });
  }




}
