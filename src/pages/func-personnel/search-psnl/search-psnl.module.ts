import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPsnlPage } from './search-psnl';

@NgModule({
  declarations: [
    SearchPsnlPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPsnlPage),
  ],
})
export class SearchPsnlPageModule {}
