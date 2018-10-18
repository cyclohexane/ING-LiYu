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

  page = 1
  public hasMoreData = true
  provider: string[] = []

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public toaster: ToasterProvider) {
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getProvider();
  }

  getProvider(scroll?) {

    this.http.doGet(`boss/offer/offererlist.do?pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.provider = res.data.list;
      } else {
        this.provider = this.provider.concat(res.data.list);
      }
      if (scroll) {
        scroll.complete();
        if (res.data.list.length < 30) {
          this.hasMoreData = false;
        }
      }
      this.page++;
    });
  }

  doLoadMore(scroll) {
    this.getProvider(scroll);
  }

  alterProvider(offerId, offerCompany, offerPhone, address) {
    let alert = this.alertCtrl.create({
      title: '修改供货商',
      inputs: [
        {
          name: 'offerCompany',
          placeholder: '请输入供货商电话',
          value: offerCompany
        },
        {
          name: 'offerPhone',
          placeholder: '请输入供货商电话',
          value: offerPhone
        },
        {
          name: 'address',
          placeholder: '请输入单位地址',
          value: address
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
            if (!data.offerCompany || !data.offerCompany.trim()) {
              this.toaster.show('供货商名为必填项！');
              return false;
            }
            let param = {
              offerId: offerId,
              offerCompany: data.offerCompany,
              offerPhone: data.offerPhone,
              address: data.address
            };
            this.http.doPost('boss/offer/updateofferer.do', this.http.toURL(param), res => {
              this.toaster.show('修改供货商成功！');
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
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            let param = {
              offerId: offerId
            }
            this.http.doPost('boss/offer/deleteofferer.do', this.http.toURL(param), res => {
              this.toaster.show('删除供货商成功！');
              this.getProvider();
            });
          }
        }
      ]
    });
    alert.present();
  }

  toSearchProvider() {
    this.navCtrl.push("SearchProviderPage");
  }

  toProviderFnc(offerId) {
    this.navCtrl.push("ProviderFncPage", {
      offerId: offerId
    });
  }

}
