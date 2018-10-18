import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';


@IonicPage()
@Component({
  selector: 'page-search-pro',
  templateUrl: 'search-pro.html',
})
export class SearchProPage {

  userType

  @ViewChild(Content) content: Content;

  public keywords = '';

  public list = [];

  public page = 1;

  public hasMoreData = true;  /*是否有超过一页的数据*/


  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  getSearchList(scroll) {

    if (!scroll) {//键入
      this.page = 1;
      this.hasMoreData = true;
      this.content.scrollToTop(0); /*回到顶部*/
    }


    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/item/getitembyname.do';
        break;
      case 1:
        url = 'financial/item/getitembyname.do';
        break;
    }


    this.http.doGet(`${url}?itemName=${this.keywords}&pageSize=30&pageNum=${this.page}`, res => {
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

  toProDet(itemId) {

    if (this.userType === 0) {
      this.navCtrl.push("ProDetPage", {
        itemId: itemId
      });
    } else if (this.userType === 1) {
      this.navCtrl.push("ProDetBasicPage", {
        itemId: itemId
      });
    }

  }
}