import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatProviderPage } from './mat-provider';

@NgModule({
  declarations: [
    MatProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(MatProviderPage),
  ],
})
export class MatProviderPageModule {}
