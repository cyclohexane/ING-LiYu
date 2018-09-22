import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-denied-mat-out',
  templateUrl: 'denied-mat-out.html',
})
export class DeniedMatOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  toMatRecDet(): void {
    this.navCtrl.push("MatRecDetPage");
  }

}
