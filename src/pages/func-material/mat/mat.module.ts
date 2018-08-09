import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatPage } from './mat';

@NgModule({
  declarations: [
    MatPage,
  ],
  imports: [
    IonicPageModule.forChild(MatPage),
  ],
})
export class MatPageModule {}
