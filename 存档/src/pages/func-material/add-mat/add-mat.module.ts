import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatPage } from './add-mat';

@NgModule({
  declarations: [
    AddMatPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatPage),
  ],
})
export class AddMatPageModule {}
