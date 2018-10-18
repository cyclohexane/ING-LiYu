import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-mat-provider',
  templateUrl: 'mat-provider.html',
})
export class MatProviderPage {

  provider: string[] = []

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,public http: HttpUtilProvider, public toaster: ToasterProvider) {
  }

  ionViewDidLoad() {
    this.getProvider();
  }

  getProvider(){

      this.http.doGet('boss/offer/offererlist.do?pageSize=30&pageNum=1', res => {
  
        this.provider = res.data.list;

      });
  }

  alterProvider(offerCompany,offerPhone,address) {
    let alert = this.alertCtrl.create({
      title: '更新供货商',
      inputs: [
        {
          name: 'offerCompany',
          placeholder: '请输入供货商电话',
          value:offerCompany
        },
        {
          name: 'offerPhone',
          placeholder: '请输入供货商电话',
          value:offerPhone
        },
        {
          name: 'address',
          placeholder: '请输入单位地址',
          value:address
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
            this.http.doPost('boss/offer/updateofferer.do',
              {
                offerCompany: data.offerCompany,
                offerPhone: data.offerPhone,
                address: data.address
              }, res => {
                this.toaster.show('更新供货商成功！');
                this.getProvider();
              });
          }
        }
      ]
    });
    alert.present();
  }

  removeProvider(offerId) {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本供货商吗？',
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
            this.http.doPost('boss/offer/deleteofferer.do',
            {
              offerId: offerId
            }, res => {
              this.toaster.show('删除供货商成功！');
              this.getProvider();
            });
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
