import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';

@IonicPage()
@Component({
  selector: 'page-psnl',
  templateUrl: 'psnl.html',
})
export class PsnlPage {

  user: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider) {
  }

  ionViewDidLoad() {
    this.getPsnl();
  }

  getPsnl() {
    this.http.doGet('boss/user/listableuser.do?pageSize=30&pageNum=1', res => {

      this.user = res.data.list;

    });
  }

  transformType(i) {
    switch (i) {
      case 0:
        return "总监";
      case 1:
        return "公司财务记录员";
      case 2:
        return "项目经理";
      case 3:
        return "项目记录员";
    }
  }

  toPsnlDet() {
    this.navCtrl.push("PsnlDetPage");
  }

  toAddPsnl() {
    this.navCtrl.push("AddPsnlPage");
  }

}
