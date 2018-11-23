import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';


@IonicPage()
@Component({
  selector: 'page-fnc-det',
  templateUrl: 'fnc-det.html',
})
export class FncDetPage {

  userType
  recordId
  rec
  file = []
  canBeChecked

  constructor(private alertCtrl: AlertController, public cookie: CookieUtilProvider, public toaster: ToasterProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.recordId = navParams.get('recordId');
  }

  ionViewWillEnter() {
    this.getRec();
  }

  getRec() {

    let url = '';

    switch (this.userType) {
      case 0:
        url = 'boss/record/getrecordbyid.do';
        break;
      case 1:
        url = 'financial/record/getrecordbyid.do';
        break;
      case 2:
        url = 'manager/record/getrecordbyid.do';
        break;
      case 3:
        url = 'uploader/record/getrecordbyid.do';
        break;
    }


    this.http.doGet(`${url}?recordId=${this.recordId}`, res => {
      this.rec = res.data;
      if (this.rec.recordType === 0 || this.rec.recordType === 4) {
        this.rec.recordDec = this.rec.recordDec.split("/").map(i => i.split("："));
      } else {
        this.rec.recordDec = [['描述', this.rec.recordDec]];
      }
      if (this.rec.recordRefuse) {
        this.rec.recordRefuse = this.rec.recordRefuse.split("br/");
      }
      let filePath = res.data.recordImgs ? res.data.recordImgs.split(",") : [];
      let fileName = res.data.recordImgName ? res.data.recordImgName.split(",") : [];
      this.file = fileName.map((i, p) => [i, filePath[p]]);
      this.canBeChecked = (this.rec.state === 1 && this.userType === 1) || (this.rec.state === 0 && this.userType === 2);
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

  passFnc() {
    let url = '';
    switch (this.userType) {
      case 1:
        url = 'financial/record/check.do';
        break;
      case 2:
        url = 'manager/record/check.do';
        break;
    }
    let param = {
      recordId: this.recordId
    }
    this.http.doPost(url, this.http.toURL(param), res => {
      this.toaster.show("通过财务记录成功！");
      this.navCtrl.pop();
    });
  }

  refuseFnc() {
    let alert = this.alertCtrl.create({
      title: '拒绝财务记录',
      inputs: [
        {
          name: 'recordRefuse',
          placeholder: '请输入拒绝理由',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            if (!data.recordRefuse || !data.recordRefuse.trim()) {
              this.toaster.show('拒绝理由为必填项！');
              return false;
            }
            let url = '';
            switch (this.userType) {
              case 1:
                url = 'financial/record/refuserecord.do';
                break;
              case 2:
                url = 'manager/record/refuserecord.do';
                break;
            }
            let param = {
              recordId: this.recordId,
              recordRefuse: data.recordRefuse,
            };
            this.http.doPost(url, this.http.toURL(param), res => {
              this.toaster.show("拒绝财务记录成功！");
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
  }

  deleteFnc() {


    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本条财务记录吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            let url = '';
            switch (this.userType) {
              case 0:
                url = 'boss/record/deletebyrecordid.do';
                break;
              case 2:
                url = 'manager/record/deletebyrecordid.do';
                break;
              case 3:
                url = 'uploader/record/deletebyrecordid.do';
                break;
            }
            let param = {
              recordId: this.recordId
            }
            this.http.doPost(url, this.http.toURL(param), res => {
              this.toaster.show("删除财务记录成功！");
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
  }

}
