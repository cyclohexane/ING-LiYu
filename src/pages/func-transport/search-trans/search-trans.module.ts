import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTransPage } from './search-trans';

@NgModule({
  declarations: [
    SearchTransPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTransPage),
  ],
})
export class SearchTransPageModule {}
