import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPsnlPage } from './add-psnl';

@NgModule({
  declarations: [
    AddPsnlPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPsnlPage),
  ],
})
export class AddPsnlPageModule {}
