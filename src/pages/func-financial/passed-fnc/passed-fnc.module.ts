import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassedFncPage } from './passed-fnc';

@NgModule({
  declarations: [
    PassedFncPage,
  ],
  imports: [
    IonicPageModule.forChild(PassedFncPage),
  ],
})
export class PassedFncPageModule {}
