import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';
import { ToasterProvider } from '../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public http: HttpUtilProvider, public toaster: ToasterProvider, public cookie: CookieUtilProvider) {
    this.user = this.cookie.get('user');

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
    this.navCtrl.push("PersonalPage", {
      userId: this.user.userId
    });
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
