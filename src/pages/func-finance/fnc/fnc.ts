import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';
import { TimeFormatterProvider } from '../../../providers/time-formatter/time-formatter'

@IonicPage()
@Component({
  selector: 'page-fnc',
  templateUrl: 'fnc.html',
})
export class FncPage {

  type: number
  companyFnc: object = { incomeAccount: '加载中', payAccount: '加载中', profit: '加载中' }
  //仅总监和公司财务管理员有权限查看
  NormalRec

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public cookie: CookieUtilProvider, public time: TimeFormatterProvider, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter() {
    this.type = this.cookie.getType();
    if (this.type === 0 || this.type === 2) this.getCompanyFnc();
    this.getNormalRec();
  }

  getCompanyFnc(): void {
    this.http.doGet('account/getaccountitem.do', res => {

      this.companyFnc['in'] = res.data.list[0].incomeAccount;
      this.companyFnc['out'] = res.data.list[0].payAccount;
      this.companyFnc['profit'] = this.companyFnc['in'] + this.companyFnc['out'];

    });
  }

  getNormalRec(): void {

    let url = this.type === 0 || this.type === 2 ? 'getaccountlist.do' : 'getuseraccountlist.do';

    this.http.doGet(`account/${url}?pageSize=10&pageNum=1`, res => {

      let arr = res.data.list;
      arr.forEach(i => i.createTime = this.time.parseSecond(i.createTime));
      this.NormalRec = arr;

    });
  }

  toAddFnc() {
    const addFnc = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '创建支出流水',
          handler: () => {
            this.navCtrl.push("AddFncOutPage");
          }
        }, {
          text: '创建收入流水',
          handler: () => {
            this.navCtrl.push("AddFncInPage");
          }
        }
      ]
    });
    addFnc.present();
  }

  toPendingFnc() {
    this.navCtrl.push("PendingFncPage");
  }

}
