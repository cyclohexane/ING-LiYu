import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-psnl',
  templateUrl: 'psnl.html',
})
export class PsnlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toPsnlDet(){
    this.navCtrl.push("PsnlDetPage");
  }

  toAddPsnl(){
    this.navCtrl.push("AddPsnlPage");
  }

}
