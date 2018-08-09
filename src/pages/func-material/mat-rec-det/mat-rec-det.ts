import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mat-rec-det',
  templateUrl: 'mat-rec-det.html',
})
export class MatRecDetPage {

  screenHeight: number

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(): void {
    let bg = document.querySelector("page-mat-rec-det").querySelector(".scroll-content") as HTMLElement;
    bg.style.background = "#e7e7e7";
  }



}
