import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFncPage } from './add-fnc';

@NgModule({
  declarations: [
    AddFncPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFncPage),
  ],
})
export class AddFncPageModule {}
