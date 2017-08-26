import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowAddServer = false;
  newServerName = '';
  serverCreated = false;

  constructor () {
    setTimeout(() => this.allowAddServer = true, 2000);
  }

  onServerCreation () {
    this.serverCreated = true;
  }

  // onUpdateNewServerName (event: Event) {
  //   this.newServerName = (<HTMLInputElement>event.target).value;
  // }
}
