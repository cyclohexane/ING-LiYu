import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';
import { ToasterProvider } from '../../providers/toaster/toaster';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public http: HttpUtilProvider, public toaster: ToasterProvider) {
  }

  presentInfo(){

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
          }
        },
        {
          text: '确定',
          handler: data => {
            if (!data.offerCompany) {
              this.toaster.show('供货商名为必填项！');
              return false;
            }
            this.http.doPost('boss/offer/addofferer.do',
              {
                offerCompany: data.offerCompany,
                offerPhone: data.offerPhone,
                address: data.address
              }, res => {
                this.toaster.show('添加供货商成功！');
              });
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
          }
        },
        {
          text: '确定',
          handler: data => {
            if (!data.categoryName) {
              this.toaster.show('材料名为必填项！');
              return false;
            }
            this.http.doPost('boss/category/addcategory.do',
              {
                categoryName: data.categoryName,
                specifications: data.specifications,
                unit: data.unit
              }, res => {
                this.toaster.show('添加材料成功！');
              });
          }
        }
      ]
    });
    alert.present();
  }

  toPersonal(): void {
    this.navCtrl.push("PersonalPage");
  }

  toPersonalFnc(): void {
    this.navCtrl.push("PersonalFncPage");
  }

  toPro(): void {
    this.navCtrl.push("ProPage");
  }

  toAddPro(): void {
    this.navCtrl.push("AddProPage");

  }

  toPsnl(): void {
    this.navCtrl.push("PsnlPage");

  }

  toAddPsnl(): void {
    this.navCtrl.push("AddPsnlPage");
  }

  toMatProvider(): void {
    this.navCtrl.push("MatProviderPage");
  }

  toMatStock(): void {
    this.navCtrl.push("MatPage");
  }

}
