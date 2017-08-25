
import {Component} from '@angular/core';

@Component({
  selector: '[app-form-submition]',
  template: `
  
    <h1>Form submition</h1>
    
    <app-warning-alert></app-warning-alert>
    <app-success-alert></app-success-alert>
    
  `,
  styles: [`
    :host([app-form-submition]) {
      border: 2px solid darkslateblue;
      padding: 10px;
    }
  `]
})
export class FormSubmitionComponent {
}
