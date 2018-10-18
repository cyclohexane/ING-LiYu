import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFncPage } from './search-fnc';

@NgModule({
  declarations: [
    SearchFncPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFncPage),
  ],
})
export class SearchFncPageModule {}
