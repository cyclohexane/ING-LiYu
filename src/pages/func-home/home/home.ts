import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  type: number
  undeal: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public cookie: CookieUtilProvider) {
  }

  ionViewDidLoad() {
    //this.type = this.cookie.getType();
    //this.getUndeal();
  }

  getUndeal(): void {
    this.http.doGet('user/undeal.do', res => {

      this.undeal = res.data;

      //   if (value[i] == "您有财务记录需要审核") {
      //     waitcheckaccount.html?itemId=itemId
      //   }else if (value[i] == "存在项目相应负责人没有创建") {
      //   object.html?itemId=itemId
      // }
    });
  }

  toPersonal(): void {
    this.navCtrl.push('PersonalPage');
  }

}
