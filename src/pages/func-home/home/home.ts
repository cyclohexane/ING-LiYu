import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ProPreviewComponent } from '../../../components/pro-preview/pro-preview';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('btn') btn: ProPreviewComponent;
  @ViewChild(Content) content: Content;
  width: number
  height: number
  list = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mock();
  }

  toCompany(): void {
    this.navCtrl.push('CompanyPage');
  }

  toPersonal(): void {
    this.navCtrl.push('PersonalPage');
  }

  mock(): void {
    for (let i = 0; i < 7; i++) {
      this.list[i] = "员工1111被任命为材料记录员";
    }
  }


}
