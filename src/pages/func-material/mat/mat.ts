import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-mat',
  templateUrl: 'mat.html',
})
export class MatPage {

  page = 1
  public hasMoreData = true
  mat: string[] = []

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider, public toaster: ToasterProvider) {
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getMat();
  }

  getMat(scroll?) {

    this.http.doGet(`boss/category/categorylist.do?pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.mat = res.data.list;
      } else {
        this.mat = this.mat.concat(res.data.list);
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
    this.getMat(scroll);
  }



  alterMat(categoryId,categoryName, specifications, unit) {
    let alert = this.alertCtrl.create({
      title: '更新材料',
      inputs: [
        {
          name: 'categoryName',
          placeholder: '请输入材料名',
          value: categoryName
        },
        {
          name: 'specifications',
          placeholder: '请输入材料型号规格',
          value: specifications
        },
        {
          name: 'unit',
          placeholder: '请输入材料单位',
          value: unit
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: data => {
            if (!data.categoryName || !data.categoryName.trim() ) {
              this.toaster.show('材料名为必填项！');
              return false;
            }
            let param = {
              categoryId:categoryId,
              categoryName: data.categoryName,
              specifications: data.specifications,
              unit: data.unit
            }
            this.http.doPost('boss/category/updatecategory.do', this.http.toURL(param), res => {
              this.toaster.show('更新材料成功！');
              this.getMat();
            });
          }
        }
      ]
    });
    alert.present();
  }

  removeMat(categoryId) {
    let alert = this.alertCtrl.create({
      title: '确认',
      message: '确定删除本材料吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: () => {
            let param = {
              categoryId: categoryId
            }
            this.http.doPost('boss/category/deletecategory.do', this.http.toURL(param), res => {
              this.toaster.show('删除材料成功！');
              this.getMat();
            });
          }
        }
      ]
    });
    alert.present();
  }


  toMatDet(): void {
    this.navCtrl.push("MatDetPage");
  }

  toSearchMat() {
    this.navCtrl.push("SearchMatPage");
  }
}
