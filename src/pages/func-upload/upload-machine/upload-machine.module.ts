import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadMachinePage } from './upload-machine';

@NgModule({
  declarations: [
    UploadMachinePage,
  ],
  imports: [
    IonicPageModule.forChild(UploadMachinePage),
  ],
})
export class UploadMachinePageModule {}
