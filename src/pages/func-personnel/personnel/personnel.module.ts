import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonnelPage } from './personnel';

@NgModule({
  declarations: [
    PersonnelPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonnelPage),
  ],
})
export class PersonnelPageModule {}
