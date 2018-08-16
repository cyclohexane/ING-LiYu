import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-mat',
  templateUrl: 'add-mat.html',
})
export class AddMatPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: '创建新材料',
      inputs: [
        {
          name: 'mat',
          placeholder: '材料名'
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

  ionViewDidLoad() {
  }

  toMatStockDet(){
    this.navCtrl.push("MatStockDetPage");
  }

}
