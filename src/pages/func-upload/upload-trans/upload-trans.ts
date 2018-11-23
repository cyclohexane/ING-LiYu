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
  selector: 'page-upload-trans',
  templateUrl: 'upload-trans.html',
})
export class UploadTransPage {
  userType
  item
  curItemId

  trans = []
  recordDec
  transUnit
  unitPrice
  number
  fileList = []
  formData: FormData

  constructor(private filePath: FilePath, private fileChooser: FileChooser, private camera: Camera, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private cookie: CookieUtilProvider, private loadingCtrl: LoadingController, private http: HttpUtilProvider, private toaster: ToasterProvider, private navCtrl: NavController, private navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.getItem();
  }

  ionViewWillEnter() {
    this.getTrans();
  }

  getItem() {
    this.http.doGet('boss/user/getuserinfo.do?userId=' + this.cookie.get('user')['userId'], res => {
      this.item = res.data.list;
      if (this.userType === 3) {
        this.curItemId = this.item[0].itemId;
      }
    });
  }

  getTrans() {
    this.http.doGet(`boss/transport/transportlist.do?pageSize=100&pageNum=1`, res => {
      if (res.data.list.length) {
        this.trans = res.data.list;
        this.trans.forEach(i => {
          let str = `单位名：${i.transportName}`;
          if (i.transportNumber) str += `/车牌号：${i.transportNumber}`;
          if (i.transportPhone) str += `/联系电话：${i.transportPhone}`;
          i.shortDec = str;
          i.longDec = `运输单位编号：${i.transportId}/${i.shortDec}`;
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
    } else if (!this.recordDec) {
      this.toaster.show('运输单位为必填项！');
      return;
    } else if (!this.transUnit) {
      this.toaster.show('单位为必填项！');
      return;
    } else if (!this.unitPrice) {
      this.toaster.show('单价为必填项！');
      return;
    } else if (!this.number) {
      this.toaster.show('重量为必填项！');
      return;
    }
    let param = {
      itemId: this.curItemId,
      recordType: 4,//字符串防过滤
      recordDec: this.recordDec + `/数量：${this.number}${this.transUnit}`,
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
