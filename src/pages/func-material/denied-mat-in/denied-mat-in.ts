import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-denied-mat-in',
  templateUrl: 'denied-mat-in.html',
})
export class DeniedMatInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  toMatRecDet():void{
    this.navCtrl.push("MatRecDetPage");
  }
}
