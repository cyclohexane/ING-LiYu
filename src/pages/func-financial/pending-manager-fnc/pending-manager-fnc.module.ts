import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingManagerFncPage } from './pending-manager-fnc';

@NgModule({
  declarations: [
    PendingManagerFncPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingManagerFncPage),
  ],
})
export class PendingManagerFncPageModule {}
