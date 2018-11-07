import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage()
@Component({
  selector: 'page-pro-det-basic',
  templateUrl: 'pro-det-basic.html',
})
export class ProDetBasicPage {

  userType
  itemId

  page = 1
  public hasMoreData = true

  itemManager = ''
  itemUploader = ''
  itemName: string
  endTimeString: string
  itemDec: string
  fnc = []
  fileList = []
  fileTransfer: FileTransferObject = this.transfer.create()

  constructor(private fileChooser: FileChooser, private fileOpener: FileOpener, private camera: Camera, private transfer: FileTransfer, private file: File, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController, public cookie: CookieUtilProvider, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.itemId = navParams.get('itemId') || this.cookie.get('user')['itemId'];
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: '加载中',
      duration: 200,
      enableBackdropDismiss: true
    });
    loading.present();
    this.getProInfo();
    this.page = 1;
    this.getFnc();
  }

  getProInfo() {
    let url = '';
    switch (this.userType) {
      case 1:
        url = 'financial/item/getitembyid.do';
        break;
      case 2:
        url = 'manager/item/itemdetail.do';
        break;
      case 3:
        url = 'uploader/item/itemdetail.do';
        break;
    }
    this.http.doGet(`${url}?itemId=${this.itemId}`, res => {
      this.itemName = res.data.itemName;
      this.endTimeString = this.dateFormat(res.data.endTime);
      this.itemDec = res.data.itemDec;
      this.itemManager = res.data.itemManagerName;
      this.itemUploader = res.data.itemUploaderName;
      let filePath = res.data.itemFile ? res.data.itemFile.split(",") : [];
      let fileName = res.data.itemFileName ? res.data.itemFileName.split(",") : [];
      this.fileList = fileName.map((i, p) => [i, filePath[p]]);
    });
  }

  getFnc(scroll?) {

    let url = '';

    switch (this.userType) {
      case 1:
        url = 'financial/record/list.do';
        break;
      case 2:
        url = 'manager/record/list.do';
        break;
      case 3:
        url = 'uploader/record/list.do';
        break;
    }

    this.http.doGet(`${url}?pageSize=30&pageNum=${this.page}&itemId=${this.itemId}`, res => {
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

  downloadFile(f) {
    let loading = this.loadingCtrl.create({
      content: '下载中',
    });
    this.fileTransfer.download(f[1], this.file.dataDirectory + f[0]).then((entry) => {
      loading.dismiss();
      this.toaster.show("下载成功！");
    }, (error) => {
      loading.dismiss();
      this.toaster.show('下载失败！');
      console.log(error);
    });
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

  toFncDet(recordId) {
    this.navCtrl.push("FncDetPage", {
      recordId: recordId
    });
  }

}
