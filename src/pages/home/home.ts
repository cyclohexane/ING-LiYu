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
  public type

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public http: HttpUtilProvider, public toaster: ToasterProvider, public cookie: CookieUtilProvider) {
    this.user = this.cookie.get('user');
    this.type = this.user.userType;
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
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            if (!data.offerCompany) {
              this.toaster.show('供货商名为必填项！');
              return false;
            }
            let param = {
              offerCompany: data.offerCompany,
              offerPhone: data.offerPhone,
              address: data.address
            }
            this.http.doPost('boss/offer/addofferer.do', this.http.toURL(param), res => {
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
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            if (!data.categoryName || !data.categoryName.trim()) {
              this.toaster.show('材料名为必填项！');
              return false;
            }
            let param = {
              categoryName: data.categoryName,
              specifications: data.specifications,
              unit: data.unit
            }
            this.http.doPost('boss/category/addcategory.do', this.http.toURL(param), res => {
              this.toaster.show('添加材料成功！');
            });
          }
        }
      ]
    });
    alert.present();
  }

  toAllFnc() {
    this.navCtrl.push("AllFncPage");
  }

  toPassedFnc() {
    this.navCtrl.push("PassedFncPage");
  }

  toPendingFinancialFnc() {
    this.navCtrl.push("PendingFinancialFncPage");
  }

  toPendingManagerFnc() {
    this.navCtrl.push("PendingManagerFncPage");
  }

  toRefusedFnc() {
    this.navCtrl.push("RefusedFncPage");
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

  toProDetBasic(): void {
    this.navCtrl.push("ProDetBasicPage");
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

  toUploadMat() {
    this.navCtrl.push("UploadMatPage");
  }

  toUploadMachine() {
    this.navCtrl.push("UploadMachinePage");
  }

  toUploadLabor() {
    this.navCtrl.push("UploadLaborPage");
  }


  toUploadOther() {
    this.navCtrl.push("UploadOtherPage");
  }


}
