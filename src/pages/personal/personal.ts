import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';
import { ToasterProvider } from '../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  userId
  userType
  user

  constructor(public cookie: CookieUtilProvider, public toaster: ToasterProvider, public http: HttpUtilProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get('userId');
    this.userType = this.cookie.get('user')['userType'];
  }

  ionViewWillEnter() {
    this.getInfo();
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

  getInfo() {

    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/user/getuserinfo.do';
        break;
      case 1:
        url = 'financial/user/getuserinfo.do';
        break;
      case 2:
        url = 'manager/user/getuserinfo.do';
        break;
      case 3:
        url = 'uploader/user/getuserinfo.do';
        break;
    }

    this.http.doGet(`${url}?userId=${this.userId}`, res => {
      this.user = res.data;
    });
  }

  alterUserName() {
    let alert = this.alertCtrl.create({
      title: '修改用户名',
      inputs: [
        {
          name: 'userName',
          placeholder: '用户名',
          value: this.user.userName
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            this.user.userName = data.userName;
            this.updateInfo();
          }
        }
      ]
    });
    alert.present();
  }

  alterPhone() {
    let alert = this.alertCtrl.create({
      title: '修改联系电话',
      inputs: [
        {
          name: 'phone',
          placeholder: '联系电话',
          value: this.user.phone
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            this.user.phone = data.phone;
            this.updateInfo();
          }
        }
      ]
    });
    alert.present();
  }

  alterPassword() {
    let alert = this.alertCtrl.create({
      title: '修改密码',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '新密码',
        },
        {
          name: 'repassword',
          type: 'password',
          placeholder: '确认新密码',
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            if (data.repassword !== data.password) {
              this.toaster.show("两次密码不一致！");
              return false;
            } else {
              this.user.password = data.password;
              this.updateInfo();
            }
          }
        }
      ]
    });
    alert.present();
  }

  updateInfo() {

    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/user/updatemyself.do';
        break;
      case 1:
        url = 'financial/user/updatemyself.do';
        break;
      case 2:
        url = 'manager/user/updatemyself.do';
        break;
      case 3:
        url = 'uploader/user/updatemyself.do';
        break;
    }

    let param = {
      userName: this.user.userName,
      password: this.user.password,
      phone: this.user.phone
    }

    this.http.doUpload(url, this.http.toMultipart(param), res => {
      this.toaster.show('更新个人资料成功！');
    });
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定退出吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            this.http.doPost('boss/user/logout.do');
            this.cookie.unset('user');
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    alert.present();
  }
}
