import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-denied-fnc',
  templateUrl: 'denied-fnc.html',
})
export class DeniedFncPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toFncRecDet(): void {
    this.navCtrl.push("FncRecDetPage");
  }

}
