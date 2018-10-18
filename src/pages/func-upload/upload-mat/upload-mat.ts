import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';



@IonicPage()
@Component({
  selector: 'page-upload-mat',
  templateUrl: 'upload-mat.html',
})
export class UploadMatPage {
  userType

  provider = []
  mat = []

  offerId
  recordDec
  unitPrice
  number
  file = []

  constructor(public cookie: CookieUtilProvider, public loadingCtrl: LoadingController, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  ionViewWillEnter() {
    this.getProvider();
    this.getMat();
  }

  getProvider() {
    this.http.doGet(`boss/offer/offererlist.do?pageSize=100&pageNum=1`, res => {
      this.provider = res.data.list;
    });
  }

  getMat() {
    this.http.doGet(`boss/category/categorylist.do?pageSize=100&pageNum=1`, res => {
      if (res.data.list.length) {
        this.mat = res.data.list;
        this.mat.forEach(i => {
          let str = `材料名：${i.categoryName}`;
          if (i.specifications) str += `/材料规格：${i.specifications}`;
          if (i.unit) str += `/材料单位：${i.unit}`;
          i.shortDec = str;
          i.longDec = `材料编号：${i.categoryId}/${i.shortDec}`;
        });
      }
    });
  }

  addFile(event) {
    this.file.push(event.target['files'][0]);
    console.log(this.file);
  }

  deleteFile(p) {
    this.file.splice(p, 1);
  }

  uploadRec() {
    if (!this.offerId) {
      this.toaster.show('供货商为必填项！');
    } else if (!this.recordDec) {
      this.toaster.show('材料为必填项！');
      return;
    } else if (!this.unitPrice) {
      this.toaster.show('时价为必填项！');
      return;
    } else if (!this.number) {
      this.toaster.show('工时为必填项！');
      return;
    }
    let loading = this.loadingCtrl.create({
      content: '上传中',
      enableBackdropDismiss: true
    });
    loading.present();
    let param = {
      recordType: '0',
      offerId: this.offerId,
      recordDec: this.recordDec,
      unitPrice: this.unitPrice,
      number: this.number
    }
    let formData = this.http.toMultipart(param);
    if (this.file.length) {
      for (let i of this.file) {
        formData.append('upload_file', i, i['name']);
      }
    }
    let url = '';
    switch (this.userType) {
      case 2:
        url = 'manager/record/addrecord.do';
        break;
      case 3:
        url = 'uploader/record/addrecord.do';
        break;
    }
    this.http.doUpload(url, formData, res => {
      loading.dismiss();
      this.toaster.show("上传财务记录成功！");
      this.navCtrl.pop();
    })
  }


}
