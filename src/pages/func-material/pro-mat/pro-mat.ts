import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro-mat',
  templateUrl: 'pro-mat.html',
})
export class ProMatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }



  /*路由*/

  toPendingMatOut(): void {
    this.navCtrl.push("PendingMatOutPage");
  }

  toPendingMatIn(): void {
    this.navCtrl.push("PendingMatInPage");
  }

  toAddMatOut(): void {
    this.navCtrl.push("AddMatOutPage");
  }

  toAddMatIn(): void {
    this.navCtrl.push("AddMatInPage");
  }

  toMatStock(): void {
    this.navCtrl.push("MatStockPage");
  }


  toMatRecDet(): void {
    this.navCtrl.push("MatRecDetPage");
  }

}
