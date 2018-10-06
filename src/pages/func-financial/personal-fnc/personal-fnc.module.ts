import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalFncPage } from './personal-fnc';

@NgModule({
  declarations: [
    PersonalFncPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalFncPage),
  ],
})
export class PersonalFncPageModule {}
