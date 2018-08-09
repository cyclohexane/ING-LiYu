import { Component } from '@angular/core';

/**
 * Generated class for the ProLabelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pro-label',
  templateUrl: 'pro-label.html'
})
export class ProLabelComponent {

  text: string;

  constructor() {
    console.log('Hello ProLabelComponent Component');
    this.text = 'Hello World';
  }

}
