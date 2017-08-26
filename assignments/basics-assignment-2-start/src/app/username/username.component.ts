
import {Component} from '@angular/core';

@Component({
  selector: 'app-username',
  template: `    
    <label>
      username:

      <input
        [(ngModel)]="username"
        type="text"
        class="form-control"
      >
    </label>

    <p>{{username}}</p>

    <button
      (click)="onResetUser()"
      [disabled]="!username"
      class="btn btn-warning"
    >
      Reset user
    </button>
  `,
})
export class UsernameComponent {
  private defaultUsername = '';

  username = this.defaultUsername;

  onResetUser () {
    this.username = this.defaultUsername;
  }
}
