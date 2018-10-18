import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';
import { ToasterProvider } from '../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  userId: number
  user

  constructor(public toaster: ToasterProvider, public http: HttpUtilProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.userId = navParams.get('userId');
  }

  ionViewDidLoad() {
    this.getInfo();
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

  getInfo() {
    this.http.doGet('boss/user/getuserinfo.do?userId=' + this.userId, res => {
      this.user = res.data;
      console.log(this.user);
    });
  }

  alterName() {
    let alert = this.alertCtrl.create({
      title: '修改姓名',
      inputs: [
        {
          name: 'name',
          placeholder: '姓名'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }

  alterSex() {
    let alert = this.alertCtrl.create({
      title: '修改性别',
      inputs: [
        {
          name: "sex",
          type: 'radio',
          label: '男',
          value: 'male'
        },
        {
          name: "sex",
          type: 'radio',
          label: '女',
          value: 'female',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  alterTel() {
    let alert = this.alertCtrl.create({
      title: '修改电话',
      inputs: [
        {
          name: 'tel',
          placeholder: '电话'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            //return false;
          }
        }
      ]
    });
    alert.present();
  }

  alterDistrict() {
    let alert = this.alertCtrl.create({
      title: '修改地区',
      inputs: [
        {
          name: 'district',
          placeholder: '地区'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            //return false;
          }
        }
      ]
    });
    alert.present();
  }

  alterUsername() {
    let alert = this.alertCtrl.create({
      title: '修改用户名',
      inputs: [
        {
          name: 'username',
          placeholder: '用户名'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            //return false;
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
          placeholder: '密码'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            //return false;
          }
        }
      ]
    });
    alert.present();
  }

  alterPro() {
    let alert = this.alertCtrl.create({
      title: '修改所属项目',
      inputs: [
        {
          name: "pro",
          type: 'radio',
          label: '项目一',
          value: '1'
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目二',
          value: '2',
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目三',
          value: '3',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }


  alterRole() {
    let alert = this.alertCtrl.create({
      title: '修改角色',
      inputs: [
        {
          name: "role",
          type: 'radio',
          label: '总监',
          value: '1'
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目经理',
          value: '2',
        },
        {
          name: "pro",
          type: 'radio',
          label: '公司财务记录员',
          value: '3',
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目财务记账员',
          value: '4',
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目财务审核员',
          value: '5',
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目材料员',
          value: '6',
        },
        {
          name: "pro",
          type: 'radio',
          label: '项目材料审核员',
          value: '7',
        },
        {
          name: "pro",
          type: 'radio',
          label: '公司普通员工',
          value: '8',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }


  logout() {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定退出吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: '确定',
          handler: () => {
            this.doLogout();
          }
        }
      ]
    });
    alert.present();
  }


  doLogout() {
    //this.navCtrl.popToRoot();
    this.app.getRootNav().setRoot("LoginPage");
  }
}
