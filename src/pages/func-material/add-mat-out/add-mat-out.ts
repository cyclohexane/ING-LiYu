import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-mat-out',
  templateUrl: 'add-mat-out.html',
})
export class AddMatOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter(): void {
    let bg = document.querySelector("page-add-mat-out").querySelector(".scroll-content") as HTMLElement;
    bg.style.background = "#e7e7e7";
  }

}
