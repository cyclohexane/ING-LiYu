import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
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

  constructor(private fileOpener: FileOpener, private transfer: FileTransfer, private file: File, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController, public cookie: CookieUtilProvider, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.itemId = navParams.get('itemId');
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
      let filePathArray = res.data.itemFile ? res.data.itemFile.split(",") : [];
      let fileNameArray = res.data.itemFileName ? res.data.itemFileName.split(",") : [];
      this.fileList = fileNameArray.map((i, p) => [i, filePathArray[p]]);
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
    try {
      this.file.checkFile(this.file.externalRootDirectory, f[0]).then(
        res => {
          this.openFile(f);
        },
        err => {
          if (err.code === 1) {
            let loading = this.loadingCtrl.create({
              content: '下载中',
            });
            loading.present();
            this.fileTransfer.download(f[1], this.file.externalRootDirectory + f[0]).then((entry) => {
              loading.dismiss();
              this.toaster.show("下载成功！");
              this.openFile(f);
            }, (error) => {
              loading.dismiss();
              this.toaster.show('下载失败！');
              console.log(error);
            });
          } else {
            console.log(err);
          }
        }
      );
    } catch (x) {
      console.log(JSON.stringify(x));
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
      case 4:
        return "运输费用";
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

  openFile(f) {
    this.fileOpener.open(this.file.externalRootDirectory + f[0], this.getFileMimeType(this.getFileType(f[0])))
      .then(() => { })
      .catch(() => {
        this.toaster.show('后缀无法识别，请手动打开文件');
      });
  }

  getFileMimeType(fileType: string): string {
    let mimeType: string = '';

    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

  getFileType(fileName: string): string {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
  }

}
