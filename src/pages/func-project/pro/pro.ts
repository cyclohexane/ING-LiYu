import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';


@IonicPage()
@Component({
  selector: 'page-pro',
  templateUrl: 'pro.html',
})
export class ProPage {

  userType
  page = 1
  public hasMoreData = true
  pro = []

  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getPro();
  }

  getPro(scroll?) {

    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/item/listitem.do';
        break;
      case 1:
        url = 'financial/item/listitem.do';
        break;
    }


    this.http.doGet(`${url}?pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.pro = res.data.list;
      } else {
        this.pro = this.pro.concat(res.data.list);
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
    this.getPro(scroll);
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

  toSearchPro() {
    this.navCtrl.push("SearchProPage");
  }

  toAddPro(){
    this.navCtrl.push("AddProPage"); 
  }
}
