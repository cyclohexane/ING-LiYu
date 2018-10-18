import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-psnl-det',
  templateUrl: 'psnl-det.html',
})
export class PsnlDetPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

  removePsnl() {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定要删除该员工吗？',
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
          }
        }
      ]
    });
    alert.present();
  }

}
