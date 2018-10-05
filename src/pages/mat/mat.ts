import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../providers/http-util/http-util';

@IonicPage()
@Component({
  selector: 'page-mat',
  templateUrl: 'mat.html',
})
export class MatPage {

  mat: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpUtilProvider) {
  }

  ionViewDidLoad() {
        //this.getMat();
  }

  getMat(): void {
    this.http.doGet('boss/category/categorylist.do?pageSize=10&pageNum=1', res => {

      this.mat = res.data;
      console.log(this.mat);
    });
  }

  toMatStockDet():void{
    this.navCtrl.push("MatStockDetPage");
  }
}
