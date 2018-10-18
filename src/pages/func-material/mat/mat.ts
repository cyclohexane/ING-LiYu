import { Component } from '@angular/core';
import {  AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-mat',
  templateUrl: 'mat.html',
})
export class MatPage {

  mat: string[] = []

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public http: HttpUtilProvider,public toaster: ToasterProvider) {
  }

  ionViewDidLoad() {
    this.getMat();
  }

  getMat(): void {
    this.http.doGet('boss/category/categorylist.do?pageSize=30&pageNum=1', res => {

      this.mat = res.data.list;

    });
  }


  alterMat(categoryName,specifications,unit) {
    let alert = this.alertCtrl.create({
      title: '更新材料',
      inputs: [
        {
          name: 'categoryName',
          placeholder: '请输入材料名',
          value:categoryName
        },
        {
          name: 'specifications',
          placeholder: '请输入材料型号规格',
          value:specifications
        },
        {
          name: 'unit',
          placeholder: '请输入材料单位',
          value:unit
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            if (!data.categoryName) {
              this.toaster.show('材料名为必填项！');
              return false;
            }
            this.http.doPost('boss/item/updateitem.do',
              {
                categoryName: data.categoryName,
                specifications: data.specifications,
                unit: data.unit
              }, res => {
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
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: '确定',
          handler: () => {
            this.http.doPost('boss/category/deletecategory.do',
              {
                categoryId: categoryId
              }, res => {
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
}
