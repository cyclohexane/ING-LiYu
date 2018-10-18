import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchProviderPage } from './search-provider';

@NgModule({
  declarations: [
    SearchProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchProviderPage),
  ],
})
export class SearchProviderPageModule {}
