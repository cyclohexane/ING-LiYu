import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadMatPage } from './upload-mat';

@NgModule({
  declarations: [
    UploadMatPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadMatPage),
  ],
})
export class UploadMatPageModule {}
