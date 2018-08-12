import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fnc',
  templateUrl: 'fnc.html',
})
export class FncPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toAddFnc() {
    this.navCtrl.push("AddFncPage");
  }

}
