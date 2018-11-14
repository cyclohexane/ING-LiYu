import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';


@IonicPage()
@Component({
  selector: 'page-upload-mat',
  templateUrl: 'upload-mat.html',
})
export class UploadMatPage {
  userType
  item
  curItemId

  provider = []
  mat = []

  offerId
  recordCarOffer
  recordCarNumber
  recordDec
  unitPrice
  number
  fileList = []
  formData: FormData

  constructor(private filePath: FilePath, private fileChooser: FileChooser, private camera: Camera, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private cookie: CookieUtilProvider, private loadingCtrl: LoadingController, private http: HttpUtilProvider, private toaster: ToasterProvider, private navCtrl: NavController, private navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.getItem();
  }

  ionViewWillEnter() {
    this.getProvider();
    this.getMat();
  }

  getItem() {
    this.http.doGet('boss/user/getuserinfo.do?userId=' + this.cookie.get('user')['userId'], res => {
      this.item = res.data.list;
      if (this.userType === 3) {
        this.curItemId = this.item[0].itemId;
      }
    });
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

  decode(f) {
    return decodeURI(f).substr(decodeURI(f).lastIndexOf("/") + 1);
  }

  addFile() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择上传文件方式',
      buttons: [
        {
          text: '拍照上传',
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: '选择文件',
          handler: () => {
            this.chooseFile();
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.fileList.push(imageData);
    }, (err) => {
      console.log(err);
    });
  }

  chooseFile() {
    this.fileChooser.open()
      .then(uri => {
        if (uri.startsWith("content://")) {
          this.filePath.resolveNativePath(uri).then((path) => this.fileList.push(path));
        }
      })
      .catch(e => {
        this.toaster.show("出现错误或取消选择！")
        console.log(e);
      });
  }

  readFile(imageURI) {
    return new Promise((resolve, reject) => {
      window['resolveLocalFileSystemURL'](imageURI, entry => {
        entry.file(f => {
          let reader = new FileReader();
          reader.onload = () => {
            this.formData.append('upload_file', new Blob([reader.result], { type: "image/jpeg" }), this.decode(imageURI));
            resolve();
          }
          reader.onerror = () => this.toaster.show(reader.error);
          reader.readAsArrayBuffer(f);
        }, (e) => { this.toaster.show("出现错误！") });
      });
    });
  }

  uploadRec() {
    if (!this.curItemId) {
      this.toaster.show('所属项目为必填项！');
      return;
    } else if (!this.offerId) {
      this.toaster.show('供货商为必填项！');
    } else if (!this.recordDec) {
      this.toaster.show('材料为必填项！');
      return;
    } else if (!this.recordCarOffer || !this.recordCarOffer.trim()) {
      this.toaster.show('送货单位为必填项！');
      return;
    } else if (!this.recordCarNumber || !this.recordCarNumber.trim()) {
      this.toaster.show('车牌号码为必填项！');
      return;
    } else if (!this.unitPrice) {
      this.toaster.show('时价为必填项！');
      return;
    } else if (!this.number) {
      this.toaster.show('工时为必填项！');
      return;
    }
    let param = {
      itemId: this.curItemId,
      recordType: '0',//字符串防过滤
      offerId: this.offerId,
      recordCarOffer: this.recordCarOffer,
      recordCarNumber: this.recordCarNumber,
      recordDec: this.recordDec,
      unitPrice: this.unitPrice,
      number: this.number
    }
    this.formData = this.http.toMultipart(param);
    if (this.fileList.length) {
      Promise.all(this.fileList.map(i => this.readFile(i)))
        .then(() => this.doUpload());
    } else {
      this.doUpload();
    }
  }

  doUpload() {
    let url = '';
    switch (this.userType) {
      case 2:
        url = 'manager/record/addrecord.do';
        break;
      case 3:
        url = 'uploader/record/addrecord.do';
        break;
    }
    let loading = this.loadingCtrl.create({
      content: '上传中',
      enableBackdropDismiss: true
    });
    loading.present();
    this.http.doUpload(url, this.formData, res => {
      loading.dismiss();
      this.toaster.show("上传财务记录成功！");
      this.navCtrl.pop();
    });
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
            this.fileList.splice(p, 1);
          }
        }
      ]
    });
    alert.present();
  }

}
