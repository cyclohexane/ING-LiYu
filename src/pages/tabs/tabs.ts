import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "FinancePage";
  tab2Root = "ProjectPage";
  tab3Root = "HomePage";
  tab4Root = "MatPage";
  tab5Root = "PersonnelPage";

  constructor() {

  }
}
