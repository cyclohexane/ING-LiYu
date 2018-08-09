import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mat',
  templateUrl: 'mat.html',
})
export class MatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toAddMat(): void {
    this.navCtrl.push("AddMatPage");
  }

  toMatProvider(): void {
    this.navCtrl.push("MatProviderPage");
  }

  toProMat(): void {
    this.navCtrl.push("ProMatPage");
  }

}
