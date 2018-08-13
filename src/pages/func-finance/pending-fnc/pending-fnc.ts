import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pending-fnc',
  templateUrl: 'pending-fnc.html',
})
export class PendingFncPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toDeniedFnc(): void {
    this.navCtrl.push("DeniedFncPage");
  }

}
