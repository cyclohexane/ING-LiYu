import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro',
  templateUrl: 'pro.html',
})
export class ProPage {

  percentage:number[]  = [50,75,25,91];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toAddPro(){
    this.navCtrl.push("AddProPage");
  }

  toProDet(){
    this.navCtrl.push("ProDetPage");
  }
}
