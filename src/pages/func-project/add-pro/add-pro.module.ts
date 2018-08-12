import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProPage } from './add-pro';

@NgModule({
  declarations: [
    AddProPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProPage),
  ],
})
export class AddProPageModule {}
