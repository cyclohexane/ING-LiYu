import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingFncPage } from './pending-fnc';

@NgModule({
  declarations: [
    PendingFncPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingFncPage),
  ],
})
export class PendingFncPageModule {}
