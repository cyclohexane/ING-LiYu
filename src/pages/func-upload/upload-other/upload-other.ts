import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-upload-other',
  templateUrl: 'upload-other.html',
})
export class UploadOtherPage {

  userType
  recordDec
  sumPrice
  file = []

  constructor(public alertCtrl: AlertController, public cookie: CookieUtilProvider, public loadingCtrl: LoadingController, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
  }

  addFile(event) {
    this.file.push(event.target['files'][0]);
  }

  deleteFile(p) {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本文件吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            this.file.splice(p, 1);
          }
        }
      ]
    });
    alert.present();
  }

  uploadRec() {
    if (!this.recordDec || !this.recordDec.trim()) {
      this.toaster.show('财务描述为必填项！');
      return;
    } else if (!this.sumPrice) {
      this.toaster.show('总价为必填项！');
      return;
    }
    let loading = this.loadingCtrl.create({
      content: '上传中',
      enableBackdropDismiss: true
    });
    loading.present();
    let param = {
      recordType: 3,
      recordDec: this.recordDec,
      sumPrice: this.sumPrice
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
