import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMatPage } from './search-mat';

@NgModule({
  declarations: [
    SearchMatPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMatPage),
  ],
})
export class SearchMatPageModule {}
