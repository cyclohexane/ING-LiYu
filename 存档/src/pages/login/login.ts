import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../providers/cookie-util/cookie-util';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = {
    userName: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider,public cookie:CookieUtilProvider) {
  }

  doLogin() {
    // this.http.doPost('user/login.do', this.user, res => {
    //   this.cookie.set('user',res.data)
    //   this.navCtrl.push("TabsPage");
    // });
    this.navCtrl.push("TabsPage");
  }

}
