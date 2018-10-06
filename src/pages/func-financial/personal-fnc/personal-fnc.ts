import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personal-fnc',
  templateUrl: 'personal-fnc.html',
})
export class PersonalFncPage {
  @ViewChild('menu') menu:ElementRef
  menuShow:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

toggleMenu(){
  this.menuShow= !this.menuShow;
  if(this.menuShow){
  this.menu.nativeElement.style.display="block";
  }else{
    this.menu.nativeElement.style.display="none";
  }
}

  ionViewDidLoad() {
  }

  toFncRecDet(): void {
    this.navCtrl.push("FncRecDetPage");
  }

  toDeniedFnc(): void {
    this.navCtrl.push("DeniedFncPage");
  }

}
