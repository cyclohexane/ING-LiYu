import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchProPage } from './search-pro';

@NgModule({
  declarations: [
    SearchProPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchProPage),
  ],
})
export class SearchProPageModule {}
