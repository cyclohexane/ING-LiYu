import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-search-provider',
  templateUrl: 'search-provider.html',
})
export class SearchProviderPage {

  @ViewChild(Content) content: Content;

  public keywords = '';

  public list = [];

  public page = 1;

  public hasMoreData = true;  /*是否有超过一页的数据*/


  constructor(public toaster: ToasterProvider, private alertCtrl: AlertController, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  getSearchList(scroll?) {

    if (!scroll) {//键入
      this.page = 1;
      this.hasMoreData = true;
      this.content.scrollToTop(0); /*回到顶部*/
    }

    this.http.doGet(`boss/offer/getoffererbyname.do?offerCompany=${this.keywords}&pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.list = res.data.list;
      } else {
        this.list = this.list.concat(res.data.list);
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
    this.getSearchList(scroll)
  }

  alterProvider(offerCompany, offerPhone, address) {
    let alert = this.alertCtrl.create({
      title: '更新供货商',
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
              offerCompany: data.offerCompany,
              offerPhone: data.offerPhone,
              address: data.address
            };
            this.http.doPost('boss/offer/updateofferer.do', this.http.toURL(param), res => {
              this.toaster.show('更新供货商成功！');
              this.getSearchList();
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
              this.getSearchList();
            });
          }
        }
      ]
    });
    alert.present();
  }

  toProviderFnc(offerId) {
    this.navCtrl.push("ProviderFncPage", {
      offerId: offerId
    });
  }

}
