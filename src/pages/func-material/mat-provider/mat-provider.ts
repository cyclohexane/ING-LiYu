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
      title: '更新供应商信息',
      inputs: [
        {
          name: 'name',
          placeholder: '公司名'
        },
        {
          name: 'address',
          placeholder: '地址'
        },
        {
          name: 'tel',
          placeholder: '联系电话'
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


  removeProvider() {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本供应商吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
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



  toAddProvider(): void {
    this.navCtrl.push("AddProviderPage");
  }

}
