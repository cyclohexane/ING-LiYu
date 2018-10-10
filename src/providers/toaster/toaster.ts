import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToasterProvider {

  constructor(private toastCtrl: ToastController) {
  }

  show(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
      position:'middle'
    });
    toast.present();
  }
}

