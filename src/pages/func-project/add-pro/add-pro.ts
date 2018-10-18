import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';


@IonicPage()
@Component({
  selector: 'page-add-pro',
  templateUrl: 'add-pro.html',
})
export class AddProPage {

  manager = []
  uploader = []

  itemManager = ''
  itemUploader = ''
  itemName: string
  endTimeString: string
  itemDec: string

  constructor(public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.getManager();
    this.getuploader();
  }

  getManager(): void {
    this.http.doGet('boss/item/getuserforcheck.do?userType=2', res => {
      this.manager = res.data;
    });
  }

  getuploader(): void {
    this.http.doGet('boss/item/getuserforcheck.do?userType=3', res => {
      this.uploader = res.data;
    });
  }

  addPro(): void {
    if (!this.itemName || !this.itemName.trim()) {
      this.toaster.show('项目名称为必填项！');
    } else if (!this.itemDec || !this.itemDec.trim()) {
      this.toaster.show('项目描述为必填项！');
    } else {
      let param = {
        itemName: this.itemName,
        itemDec: this.itemDec,
        endTimeString: this.endTimeString,
        itemManagerId: this.itemManager.split("-")[0] || this.itemManager,
        itemManagerName: this.itemManager.split("-")[1] || this.itemManager,
        itemUploaderId: this.itemUploader.split("-")[0] || this.itemUploader,
        itemUploaderName: this.itemUploader.split("-")[1] || this.itemUploader
      };
      this.http.doUpload('boss/item/additem.do', this.http.toMultipart(param), res => {
        this.toaster.show('创建项目成功！');
        this.navCtrl.pop();
      });
    }
  }

}
