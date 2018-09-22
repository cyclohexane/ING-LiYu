import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatStockPage } from './mat-stock';

@NgModule({
  declarations: [
    MatStockPage,
  ],
  imports: [
    IonicPageModule.forChild(MatStockPage),
  ],
})
export class MatStockPageModule {}
