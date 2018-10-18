import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProDetBasicPage } from './pro-det-basic';

@NgModule({
  declarations: [
    ProDetBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(ProDetBasicPage),
  ],
})
export class ProDetBasicPageModule {}
