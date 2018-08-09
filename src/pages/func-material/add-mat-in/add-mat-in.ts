import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-mat-in',
  templateUrl: 'add-mat-in.html',
})
export class AddMatInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter(): void {
    let bg = document.querySelector("page-add-mat-in").querySelector(".scroll-content") as HTMLElement;
    bg.style.background = "#e7e7e7";
  }

}
