import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';

@IonicPage()
@Component({
  selector: 'page-psnl',
  templateUrl: 'psnl.html',
})
export class PsnlPage {

  page = 1
  public hasMoreData = true
  user: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider) {
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getPsnl();
  }

  getPsnl(scroll?) {

    this.http.doGet(`boss/user/listableuser.do?pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.user = res.data.list;
      } else {
        this.user = this.user.concat(res.data.list);
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
    this.getPsnl(scroll);
  }


  transformType(i) {
    switch (i) {
      case 0:
        return "总监";
      case 1:
        return "公司财务";
      case 2:
        return "项目经理";
      case 3:
        return "项目记录员";
    }
  }

  toPsnlDet(userId) {
    this.navCtrl.push("PsnlDetPage", {
      userId: userId
    });
  }

  toSearchPsnl() {
    this.navCtrl.push("SearchPsnlPage");
  }

}
