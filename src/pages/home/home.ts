import { Component } from '@angular/core';
import { AlertController,IonicPage,NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController) {

  }

  addProvider() {
    let alert = this.alertCtrl.create({
      title: '新增供货商',
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

  addMat() {
    let alert = this.alertCtrl.create({
      title: '创建新材料',
      inputs: [
        {
          name: 'categoryName',
          placeholder: '请输入材料名'
        },
        {
          name: 'specifications',
          placeholder: '请输入材料型号规格'
        },
        {
          name: 'unit',
          placeholder: '请输入材料单位'
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

  toPro():void{
    this.navCtrl.push("ProPage");

  }

  toAddPro():void{
    this.navCtrl.push("AddProPage");

  }

  toPsnl():void{
    this.navCtrl.push("PsnlPage");

  }

  toAddPsnl():void{
    this.navCtrl.push("AddPsnlPage");
  }

  toMatProvider():void{
    this.navCtrl.push("MatProviderPage");
  }
  
  toMatStock():void{
    this.navCtrl.push("MatPage");
  }

}
