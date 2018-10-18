import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderFncPage } from './provider-fnc';

@NgModule({
  declarations: [
    ProviderFncPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderFncPage),
  ],
})
export class PassedFncPageModule {}
