import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProPage } from './pro';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ProPage,
  ],
  imports: [
    IonicPageModule.forChild(ProPage),
    ComponentsModule
  ],
})
export class ProPageModule { }
