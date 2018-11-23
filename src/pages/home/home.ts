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
  public item

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public http: HttpUtilProvider, public toaster: ToasterProvider, public cookie: CookieUtilProvider) {
    this.user = this.cookie.get('user');
    this.type = this.user.userType;
    this.getItem();
  }

  getItem() {
    this.http.doGet('boss/user/getuserinfo.do?userId=' + this.user.userId, res => {
      this.item = res.data.list;
    });
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

  addTrans() {
    let alert = this.alertCtrl.create({
      title: '创建新运输单位',
      inputs: [
        {
          name: 'transportName',
          placeholder: '请输入单位名'
        },
        {
          name: 'transportNumber',
          placeholder: '请输入车牌号'
        },
        {
          name: 'transportPhone',
          placeholder: '请输入电话号码'
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
            if (!data.transportName || !data.transportName.trim()) {
              this.toaster.show('单位名为必填项！');
              return false;
            }
            if (!data.transportNumber || !data.transportNumber.trim()) {
              this.toaster.show('车牌号为必填项！');
              return false;
            }
            if (!data.transportPhone || !data.transportPhone.trim()) {
              this.toaster.show('电话号码为必填项！');
              return false;
            }
            let param = {
              transportName: data.transportName,
              transportNumber: data.transportNumber,
              transportPhone: data.transportPhone
            }
            this.http.doPost('boss/transport/addtransport.do', this.http.toURL(param), res => {
              this.toaster.show('添加运输单位成功！');
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

  toPartialFnc(condition) {
    this.navCtrl.push("PartialFncPage", {
      condition: condition
    });
  }

  toPersonal(): void {
    this.navCtrl.push("PersonalPage", {
      userId: this.user.userId
    });
  }

  toPro(): void {
    this.navCtrl.push("ProPage");
  }

  toAddPro(): void {
    this.navCtrl.push("AddProPage");
  }

  toProDetBasic(itemId): void {
    this.navCtrl.push("ProDetBasicPage", {
      itemId: itemId
    });
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

  toMat(): void {
    this.navCtrl.push("MatPage");
  }

  toTrans(): void {
    this.navCtrl.push("TransPage");
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

  toUploadTrans() {
    this.navCtrl.push("UploadTransPage");
  }

  toUploadOther() {
    this.navCtrl.push("UploadOtherPage");
  }


}
