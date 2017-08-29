import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() visibleSection: string;
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNav (target: string) {
    this.navigate.emit(target);
  }
}
