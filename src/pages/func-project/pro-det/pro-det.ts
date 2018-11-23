import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

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

  itemManager
  itemUploader
  curItemManager
  curItemUploader
  itemName: string
  endTimeString: string
  itemDec: string
  amount
  fnc = []
  fileList = []
  fileTransfer: FileTransferObject = this.transfer.create()

  constructor(private filePath: FilePath, private fileChooser: FileChooser, private fileOpener: FileOpener, private camera: Camera, private transfer: FileTransfer, private file: File, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public http: HttpUtilProvider, public toaster: ToasterProvider, public navCtrl: NavController, public navParams: NavParams) {
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
    this.getManager();
    this.getuploader();
    this.getAmount();
    this.page = 1;
    this.getFnc();
  }

  getProInfo() {
    this.http.doGet('boss/item/getitembyid.do?itemId=' + this.itemId, res => {
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

  getAmount(): void {
    this.http.doGet('boss/record/getrecordamount.do?itemId=' + this.itemId, res => {
      this.amount = res.data;
      this.amount.list.forEach(i => {
        let rec = i.recordDec.split("/").map(r => r.split("："));
        i.categoryName = rec[1][1];
        i.specifications = rec[2][1];
        i.unit = rec[3][1];
      });
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


  changeManager() {
    let param = {
      itemId: this.itemId,
      itemManagerId: this.curItemManager.split("-")[0],
      itemManagerName: this.curItemManager.split("-")[1]
    }
    this.http.doUpload('boss/item/updateitem.do', this.http.toMultipart(param), res => {
      this.toaster.show('修改项目经理成功！');
    });
  }

  changeUploader() {
    let param = {
      itemId: this.itemId,
      itemUploaderId: this.curItemUploader.split("-")[0],
      itemUploaderName: this.curItemUploader.split("-")[1]
    }
    this.http.doUpload('boss/item/updateitem.do', this.http.toMultipart(param), res => {
      this.toaster.show('修改记录员成功！');
    });
  }

  // updatePro(): void {
  //   if (!this.itemName || !this.itemName.trim()) {
  //     this.toaster.show('项目名称为必填项！');
  //   } else if (!this.itemDec || !this.itemDec.trim()) {
  //     this.toaster.show('项目描述为必填项！');
  //   } else {
  //     let param = {
  //       itemName: this.itemName,
  //       itemDec: this.itemDec,
  //       endTimeString: this.endTimeString,
  //       itemManagerId: this.itemManager.split("-")[0] || this.itemManager,
  //       itemManagerName: this.itemManager.split("-")[1] || this.itemManager,
  //       itemUploaderId: this.itemUploader.split("-")[0] || this.itemUploader,
  //       itemUploaderName: this.itemUploader.split("-")[1] || this.itemUploader
  //     };
  //     this.http.doUpload('boss/item/updateitem.do', this.http.toMultipart(param), res => {
  //       this.toaster.show('修改项目成功！');
  //     });
  //   }
  // }

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
      let loading = this.loadingCtrl.create({
        content: '上传中',
      });
      loading.present();
      let options: FileUploadOptions = {
        fileKey: 'upload_file',
        fileName: new Date().getTime().toString() + '.jpg',//用时间戳当照片的名字
        params: { 'itemId': this.itemId }
      }
      this.fileTransfer.upload(imageData, this.http.base + 'boss/item/addfile.do', options)
        .then((data) => {
          loading.dismiss();
          this.toaster.show("上传文件成功！");
          this.getProInfo();
        }, (err) => {
          loading.dismiss();
          this.toaster.show('上传文件失败！');
          console.log(err);
        });
    }, (err) => {
      this.toaster.show('选择文件失败或取消选择！');
      console.log(err);
    });
  }

  chooseFile() {
    this.fileChooser.open()
      .then(uri => {
        let loading = this.loadingCtrl.create({
          content: '上传中',
        });
        loading.present();
        if (uri.startsWith("content://")) {
          this.filePath.resolveNativePath(uri).then((path) => {
            let options: FileUploadOptions = {
              fileKey: 'upload_file',
              fileName: decodeURI(path).substr(decodeURI(path).lastIndexOf("/") + 1),
              params: { 'itemId': this.itemId }
            }
            this.fileTransfer.upload(path, this.http.base + 'boss/item/addfile.do', options)
              .then((data) => {
                loading.dismiss();
                this.toaster.show("上传成功！");
                this.getProInfo();
              }, (err) => {
                loading.dismiss();
                this.toaster.show('上传失败！');
                console.log(err);
              });
          });
        }
      })
      .catch(e => {
        this.toaster.show('上传失败！');
        console.log(e);
      });

    // this.chooser.getFile('*')
    //   .then(f => {
    //     console.log(f);
    //     this.toaster.show('then');
    //     this.toaster.show(f.uri);
    //     let loading = this.loadingCtrl.create({
    //       content: '上传中',
    //     });
    //     loading.present();
    //     let options: FileUploadOptions = {
    //       fileKey: 'upload_file',
    //       fileName: f.name,
    //       params: { 'itemId': this.itemId }
    //     }
    //     this.fileTransfer.upload(f.uri, this.http.base + 'boss/item/addfile.do', options)
    //       .then((data) => {
    //         loading.dismiss();
    //         this.toaster.show("上传文件成功！");
    //         this.getProInfo();
    //       }, (err) => {
    //         loading.dismiss();
    //         this.toaster.show(err);
    //       });
    //   })
    //   .catch((error: any) => console.log(error));
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
