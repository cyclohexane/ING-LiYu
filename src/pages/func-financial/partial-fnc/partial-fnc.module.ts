import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartialFncPage } from './partial-fnc';

@NgModule({
  declarations: [
    PartialFncPage,
  ],
  imports: [
    IonicPageModule.forChild(PartialFncPage),
  ],
})
export class PartialFncPageModule {}
