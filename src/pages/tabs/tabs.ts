import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "FncPage";
  tab2Root = "ProPage";
  tab3Root = "HomePage";
  tab4Root = "MatPage";
  tab5Root = "PsnlPage";

  constructor() {

  }
}
