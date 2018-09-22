import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro-mat',
  templateUrl: 'pro-mat.html',
})
export class ProMatPage {

  @ViewChild('menu') menu: ElementRef
  menuShow: boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleMenu() {
    this.menuShow = !this.menuShow;
    if (this.menuShow) {
      this.menu.nativeElement.style.display = "block";
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  ionViewDidLoad() {
  }


  toPendingMatOut(): void {
    this.navCtrl.push("PendingMatOutPage");
  }

  toPendingMatIn(): void {
    this.navCtrl.push("PendingMatInPage");
  }

  toAddMatOut(): void {
    this.navCtrl.push("AddMatOutPage");
  }

  toAddMatIn(): void {
    this.navCtrl.push("AddMatInPage");
  }

  toMatStock(): void {
    this.navCtrl.push("MatStockPage");
  }


  toMatRecDet(): void {
    this.navCtrl.push("MatRecDetPage");
  }

}
