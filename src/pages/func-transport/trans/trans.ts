import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-trans',
  templateUrl: 'trans.html',
})
export class TransPage {

  page = 1
  public hasMoreData = true
  trans: string[] = []

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public toaster: ToasterProvider) {
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getTrans();
  }

  getTrans(scroll?) {

    this.http.doGet(`boss/transport/transportlist.do?pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.trans = res.data.list;
      } else {
        this.trans = this.trans.concat(res.data.list);
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
    this.getTrans(scroll);
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
              this.getTrans();
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
              this.getTrans();
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

  toSearchTrans() {
    this.navCtrl.push("SearchTransPage");
  }

}
