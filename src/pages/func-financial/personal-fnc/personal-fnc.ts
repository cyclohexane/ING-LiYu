import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personal-fnc',
  templateUrl: 'personal-fnc.html',
})
export class PersonalFncPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toFncRecDet(): void {
    this.navCtrl.push("FncRecDetPage");
  }

  toDeniedFnc(): void {
    this.navCtrl.push("DeniedFncPage");
  }

}
