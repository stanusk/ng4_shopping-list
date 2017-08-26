
import {Component} from '@angular/core';

@Component({
  selector: 'app-toggler',
  template: `
    <button
      (click)="toggle()"
      class="btn btn-primary"
    >
      Display Details
    </button>

    <p *ngIf="showingPraragraph">
      Secret Password = tuna
    </p>

    <ul>
      <li
        *ngFor="let toggle of toggles; let i = index"
        [ngStyle]="{'background-color': i >= 5 ? 'blue' : 'inherit'}"
        [ngClass]="{'white': i >= 5}"
      >
        {{i}}: {{toggle.timestamp}}
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style: none;
      padding: 0;
    }
    
    .white {
      color: white;
    }
  `]
})
export class TogglerComponent {
  toggles: Array<{timestamp: number}> = [];
  showingPraragraph = false;

  toggle () {
    this.toggles.push({timestamp: Date.now()});
    this.showingPraragraph = !this.showingPraragraph;
  }
}
