import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro',
  templateUrl: 'pro.html',
})
export class ProPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toProDet(){
    this.navCtrl.push("ProDetPage");
  }
}
