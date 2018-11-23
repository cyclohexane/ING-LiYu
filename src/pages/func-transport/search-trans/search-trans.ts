import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-search-trans',
  templateUrl: 'search-trans.html',
})
export class SearchTransPage {

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

    this.http.doGet(`boss/transport/gettransportbyname.do?transportName=${this.keywords}&pageSize=30&pageNum=${this.page}`, res => {
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

  alterTrans(transportId, transportName, transportNumber, transportPhone) {
    let alert = this.alertCtrl.create({
      title: '更新运输单位',
      inputs: [
        {
          name: 'transportName',
          placeholder: '请输入单位名',
          value: transportName
        },
        {
          name: 'transportNumber',
          placeholder: '请输入车牌号',
          value: transportNumber
        },
        {
          name: 'transportPhone',
          placeholder: '请输入电话号码',
          value: transportPhone
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
              transportId: transportId,
              transportName: data.transportName,
              transportNumber: data.transportNumber,
              transportPhone: data.transportPhone
            }
            this.http.doPost('boss/transport/updatetransport.do', this.http.toURL(param), res => {
              this.toaster.show('更新运输单位成功！');
              this.getSearchList();
            });
          }
        }
      ]
    });
    alert.present();
  }

  removeTrans(transportId) {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本单位吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            let param = {
              transportId: transportId
            }
            this.http.doPost('boss/transport/deletetransport.do', this.http.toURL(param), res => {
              this.toaster.show('删除运输单位成功！');
              this.getSearchList();
            });
          }
        }
      ]
    });
    alert.present();
  }

}
