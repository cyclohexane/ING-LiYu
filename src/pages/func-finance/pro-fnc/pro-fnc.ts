import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro-fnc',
  templateUrl: 'pro-fnc.html',
})
export class ProFncPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toFncRecDet():void{
    this.navCtrl.push("FncRecDetPage");
  }

  toAddFnc():void {
    this.navCtrl.push("AddFncPage");
  }

  toPendingFnc():void {
    this.navCtrl.push("PendingFncPage");
}
}
