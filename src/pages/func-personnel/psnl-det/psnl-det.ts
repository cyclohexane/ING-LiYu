import { Component } from '@angular/core';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-psnl-det',
  templateUrl: 'psnl-det.html',
})
export class PsnlDetPage {

  userId: number
  user

  constructor(public toaster: ToasterProvider, public http: HttpUtilProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get('userId');
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
    this.http.doGet('boss/user/getuserinfo.do?userId=' + this.userId, res => {
      this.user = res.data;
    });
  }

  alterRole() {
    let alert = this.alertCtrl.create({
      title: '修改角色',
      inputs: [
        {
          type: 'radio',
          label: '总监',
          value: '0'
        },
        {
          type: 'radio',
          label: '公司财务',
          value: '1',
        },
        {
          type: 'radio',
          label: '项目经理',
          value: '2',
        },
        {
          type: 'radio',
          label: '项目记录员',
          value: '3',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            let param = {
              userId:this.userId,
              userType:data
            };
            this.http.doPost('boss/user/updateuser.do',this.http.toURL(param), res => {
                this.toaster.show('更新职员成功！');
              });
          }
        }
      ]
    });
    alert.present();
  }

  removePsnl() {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定要删除该职员吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            let param = {
              userId:this.userId,
              state: '0'
            };
            this.http.doPost('boss/user/updateuser.do',this.http.toURL(param), res => {
                this.toaster.show('删除职员成功！');
                this.navCtrl.pop();
              });
          }
        }
      ]
    });
    alert.present();
  }


}
