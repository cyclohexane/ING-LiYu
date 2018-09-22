import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingMatInPage } from './pending-mat-in';

@NgModule({
  declarations: [
    PendingMatInPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingMatInPage),
  ],
})
export class PendingMatInPageModule {}
