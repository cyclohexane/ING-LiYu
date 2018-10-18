import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { ToasterProvider } from '../../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-search-mat',
  templateUrl: 'search-mat.html',
})
export class SearchMatPage {

  @ViewChild(Content) content: Content;

  public keywords = '';

  public list = [];

  public page = 1;

  public hasMoreData = true;  /*是否有超过一页的数据*/


  constructor(public toaster: ToasterProvider, private alertCtrl: AlertController, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  getSearchList(scroll?) {

    if (!scroll) {//键入
      this.page = 1;
      this.hasMoreData = true;
      this.content.scrollToTop(0); /*回到顶部*/
    }

    this.http.doGet(`boss/category/getcategorybyname.do?categoryName=${this.keywords}&pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.list = res.data.list;
      } else {
        this.list = this.list.concat(res.data.list);
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
    this.getSearchList(scroll)
  }


  alterMat(categoryName, specifications, unit) {
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
            if (!data.categoryName || !data.categoryName.trim()) {
              this.toaster.show('材料名为必填项！');
              return false;
            }
            let param = {
              categoryName: data.categoryName,
              specifications: data.specifications,
              unit: data.unit
            }
            this.http.doPost('boss/item/updateitem.do', this.http.toURL(param), res => {
              this.toaster.show('更新材料成功！');
              this.getSearchList();
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
              this.getSearchList();
            });
          }
        }
      ]
    });
    alert.present();
  }



}