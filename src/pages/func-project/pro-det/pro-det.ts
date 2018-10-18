import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-pro-det',
  templateUrl: 'pro-det.html',
})
export class ProDetPage {

  userType
  itemId

  page = 1
  public hasMoreData = true

  manager = []
  uploader = []

  itemManager = ''
  itemUploader = ''
  itemName: string
  endTimeString: string
  itemDec: string
  file = []
  fnc = []

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.itemId = navParams.get('itemId');
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: '加载中',
      duration: 200
    });
    loading.present();
    this.getProInfo();
    this.getManager();
    this.getuploader();
    this.page = 1;
    this.getFnc();
  }

  getProInfo() {
    this.http.doGet('boss/item/getitembyid.do?itemId=' + this.itemId, res => {
      this.itemName = res.data.itemName;
      this.endTimeString = this.dateFormat(res.data.endTime);
      this.itemDec = res.data.itemDec;
      this.itemManager = res.data.itemManagerId + '-' + res.data.itemManagerName;
      this.itemUploader = res.data.itemUploaderId + '-' + res.data.itemUploaderName;
      if (this.itemManager) this.manager.push({ userId: res.data.itemManagerId, userName: res.data.itemManagerName });
      if (this.itemUploader) this.uploader.push({ userId: res.data.itemUploaderId, userName: res.data.itemUploaderName });
      let filePath = res.data.itemFile ? res.data.itemFile.split(",") : [];
      let fileName = res.data.itemFileName ? res.data.itemFileName.split(",") : [];
      this.file = fileName.map((i, p) => [i, filePath[p]]);
    });
  }

  getManager(): void {
    this.http.doGet('boss/item/getuserforcheck.do?userType=2', res => {
      this.manager = this.manager.concat(res.data);
    });
  }

  getuploader(): void {
    this.http.doGet('boss/item/getuserforcheck.do?userType=3', res => {
      this.uploader = this.uploader.concat(res.data);
    });
  }

  getFnc(scroll?) {

    this.http.doGet(`boss/record/list.do?pageSize=30&pageNum=${this.page}&itemId=${this.itemId}`, res => {
      if (this.page === 1) {
        this.fnc = res.data.list;
      } else {
        this.fnc = this.fnc.concat(res.data.list);
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
    this.getFnc(scroll);
  }

  updatePro(): void {
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
      this.http.doUpload('boss/item/updateitem.do', this.http.toMultipart(param), res => {
        this.toaster.show('修改项目成功！');
      });
    }
  }

  dateFormat(timestamp, formats?) {
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    formats = formats || 'Y-m-d';

    var zero = function (value) {
      if (value < 10) {
        return '0' + value;
      }
      return value;
    };

    var myDate = timestamp ? new Date(timestamp) : new Date();

    var year = myDate.getFullYear();
    var month = zero(myDate.getMonth() + 1);
    var day = zero(myDate.getDate());

    var hour = zero(myDate.getHours());
    var minite = zero(myDate.getMinutes());
    var second = zero(myDate.getSeconds());

    return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
      return ({
        Y: year,
        m: month,
        d: day,
        H: hour,
        i: minite,
        s: second
      })[matches];
    });
  }


  transformRecType(i) {
    switch (i) {
      case 0:
        return "材料开销费";
      case 1:
        return "机械完工费";
      case 2:
        return "人工完工费";
      case 3:
        return "其他费用";
    }
  }

  transformState(i) {
    switch (i) {
      case 0:
        return "待项目经理审核";
      case 1:
        return "待财务审核员审核";
      case 2:
        return "完全过审";
      case 10:
        return "该记录被拒绝";
    }
  }

  addFile(event) {
    let loading = this.loadingCtrl.create({
      content: '上传中',
    });
    loading.present();
    let formData = new FormData();
    formData.append("itemId", this.itemId);
    formData.append('upload_file', event.target['files'][0], event.target['files'][0]['name']);
    this.http.doUpload('boss/item/addfile.do', formData, res => {
      loading.dismiss();
      this.toaster.show("上传文件成功！");
      this.getProInfo();
    })
  }

  deleteFile(f) {
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
            let param = {
              itemId: this.itemId,
              fileName: f[1],
              name: f[0]
            }
            this.http.doPost('boss/item/deletefile.do', this.http.toURL(param), res => {
              this.toaster.show('删除文件成功！');
              this.getProInfo();
            })
          }
        }
      ]
    });
    alert.present();
  }

  toFncDet(recordId) {
    this.navCtrl.push("FncDetPage", {
      recordId: recordId
    });
  }


}
