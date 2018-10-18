import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-search-fnc',
  templateUrl: 'search-fnc.html',
})
export class SearchFncPage {

  @ViewChild(Content) content: Content;

  public userType

  public url = `boss/record/listbydec.do?`;

  public keywords = '';

  public list = [];

  public page = 1;

  public hasMoreData = true;  /*是否有超过一页的数据*/


  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    let str = '';
    switch (this.userType) {
      case 0:
        str = 'boss/record/listbydec.do?';
        break;
      case 1:
        str = 'financial/record/listbydec.do?';
        break;
      case 2:
        str = 'manager/record/listbydec.do?';
        break;
      case 3:
        str = 'uploader/record/listbydec.do?';
        break;
    }
    str += this.navParams.get("state") !== -1 ? `state=${this.navParams.get("state")}&` : '';
    this.url = str;
  }

  getSearchList(scroll?) {

    if (!scroll) {
      this.page = 1;
      this.hasMoreData = true;
      this.content.scrollToTop(0);
    }


    this.http.doGet(this.url + `recordDec=${this.keywords}&pageSize=30&pageNum=${this.page} `, res => {
      if (this.page === 1) {
        this.list = res.data.list;
      } else {
        this.list = this.list.concat(res.data.list);
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
    this.getSearchList(scroll)
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

}
