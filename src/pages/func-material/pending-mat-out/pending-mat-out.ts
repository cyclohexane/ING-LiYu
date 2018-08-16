import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pending-mat-out',
  templateUrl: 'pending-mat-out.html',
})
export class PendingMatOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toMatRecDet():void{
    this.navCtrl.push("MatRecDetPage")
  }
  
  toDeniedMatOut():void{
    this.navCtrl.push("DeniedMatOutPage");
  }
}
