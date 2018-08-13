import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pending-mat-in',
  templateUrl: 'pending-mat-in.html',
})
export class PendingMatInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  toDeniedMatIn(): void {
    this.navCtrl.push("DeniedMatInPage");
  }
}
