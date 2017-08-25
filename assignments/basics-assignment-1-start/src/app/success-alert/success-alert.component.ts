
import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>Success alert!</p>',
  styles: [
    `
    
      p {
        border: 1px solid limegreen;
        color: limegreen;
        font-weight: 900;
        text-align: center;
      }
      
    `
  ]
})
export class SuccessAlertComponent {}
