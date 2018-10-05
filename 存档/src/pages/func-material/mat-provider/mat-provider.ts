import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mat-provider',
  templateUrl: 'mat-provider.html',
})
export class MatProviderPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  alterProvider() {
      let alert = this.alertCtrl.create({
        title: '更新供货商信息',
        inputs: [
          {
            name: 'offerCompany',
            placeholder: '请输入供货商名'
          },
          {
            name: 'offerPhone',
            placeholder: '请输入供货商电话'
          },
          {
            name: 'address',
            placeholder: '请输入单位地址'
          },
        ],
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '确定',
            handler: data => {
              console.log("添加了新材料");
              //return false;
            }
          }
        ]
      });
      alert.present();
    }



  toAddProvider(): void {
    this.navCtrl.push("AddProviderPage");
  }

}
