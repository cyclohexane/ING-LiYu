import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadTransPage } from './upload-trans';

@NgModule({
  declarations: [
    UploadTransPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadTransPage),
  ],
})
export class UploadTransPageModule {}
