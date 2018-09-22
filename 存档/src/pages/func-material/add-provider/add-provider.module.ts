import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProviderPage } from './add-provider';

@NgModule({
  declarations: [
    AddProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProviderPage),
  ],
})
export class AddProviderPageModule {}
