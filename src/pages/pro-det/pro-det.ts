import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pro-det',
  templateUrl: 'pro-det.html',
})
export class ProDetPage {

  startTime: string = "2017-07-07"
  endTime: string = "2017-07-08"
  responsibleStuff: string = "wl"
  materialStuff: string = "lst"
  approvalStuff: string = "llc"

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

  toAddPro(): void {
    this.navCtrl.push("AddProPage");
  }

  toAddFnc(): void {
    this.navCtrl.push("AddFncPage");
  }

  toAddMatOut(): void {
    this.navCtrl.push("AddMatOutPage");
  }

  toAddMatIn(): void {
    this.navCtrl.push("AddMatInPage");
  }

  toProFnc(): void {
    this.navCtrl.push("ProFncPage");
  }

  toProMat(): void {
    this.navCtrl.push("ProMatPage");
  }

  toFncRecDet(): void {
    this.navCtrl.push("FncRecDetPage");
  }

  toMatRecDet(): void {
    this.navCtrl.push("MatRecDetPage");
  }


}
