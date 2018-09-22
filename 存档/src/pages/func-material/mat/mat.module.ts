import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatPage } from './mat';
import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  declarations: [
    MatPage,
  ],
  imports: [
    IonicPageModule.forChild(MatPage),
    ComponentsModule
  ],
})
export class MatPageModule {}
