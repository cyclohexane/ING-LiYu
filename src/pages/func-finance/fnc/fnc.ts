import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-fnc',
  templateUrl: 'fnc.html',
})
export class FncPage {

  type: number
  companyFnc = []//仅总监和公司财务管理员有权限查看

  /*本页职责：
  0：查看非项目金额和所有项目进出额
  1（项目经理）：项目（with财务、材料、职员）
  2（公司财务）：财务（with审核）。
  3（财务）：项目（with财务，没有查看材料和财务流水权限）
  4（财务审核）：项目（with财务审核，没有查看材料流水权限）
  5（材料）：项目、材料。
  6（材料审核）：项目、材料。
  7（未分配）：可查看财务。
  */

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public cookie: CookieUtilProvider) {
  }

  ionViewDidLoad() {
    this.type = this.cookie.getType();
    this.getCompanyFnc();
  }

  getCompanyFnc(): void {
    this.http.doGet('account/getaccountlist.do?pageNum=1&pageSize=10', res => {

      this.companyFnc = res.data;
      console.log(this.companyFnc);

    });
  }

  toAddFnc() {
    this.navCtrl.push("AddFncPage");
  }

  toProFnc() {
    this.navCtrl.push("ProFncPage");
  }

}
