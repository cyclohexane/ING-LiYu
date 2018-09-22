import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FncPage } from './fnc';
import { ComponentsModule } from '../../../components/components.module'


@NgModule({
  declarations: [
    FncPage,
  ],
  imports: [
    IonicPageModule.forChild(FncPage),
    ComponentsModule
  ],
})
export class FncPageModule {}
