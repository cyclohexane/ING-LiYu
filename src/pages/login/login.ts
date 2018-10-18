import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public cookie: CookieUtilProvider) {
  }

  doLogin() {
    this.http.doPost('login/login.do', this.http.toURL(this.user), res => {
      let loading = this.loadingCtrl.create({
        content: '登录中',
        dismissOnPageChange: true,
        duration: 2000
      });
      loading.present();
      this.cookie.set('user', res.data);
      this.navCtrl.push("HomePage");
    });
  }

}
