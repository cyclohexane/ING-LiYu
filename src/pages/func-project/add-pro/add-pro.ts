import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-pro',
  templateUrl: 'add-pro.html',
})
export class AddProPage {

  startTime: string = "2017-07-07"
  endTime: string = "2017-07-07"
  responsibleStuff:string
  materialStuff:string
  approvalStuff:string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
