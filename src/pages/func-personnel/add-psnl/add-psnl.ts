import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from "../../../providers/toaster/toaster";

@IonicPage()
@Component({
  selector: 'page-add-psnl',
  templateUrl: 'add-psnl.html',
})
export class AddPsnlPage {

  public psnl = {
    userName: null,
    password: '147258',
    phone: null,
    userType: null
  }

  constructor(public toaster: ToasterProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  chineseLimit() {
    if (this.psnl.userName) {
      this.psnl.userName = this.psnl.userName.replace(/[^\u4e00-\u9fa5]/g, '');
    }
  }

  addPsnl() {
    this.http.doUpload('boss/user/adduser.do',this.http.toMultipart(this.psnl), res => {
      this.toaster.show("创建职员成功！");
      this.psnl = {
        userName: null,
        password: '147258',
        phone: null,
        userType: null
      };
    });
  }

}
