import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowAddServer = false;
  serverCreationStatus = 'No new servers created.';
  newServerName = '';

  constructor () {
    setTimeout(() => this.allowAddServer = true, 2000);
  }

  onServerCreation () {
    this.serverCreationStatus = `Server "${this.newServerName}" created.`;
  }

  // onUpdateNewServerName (event: Event) {
  //   this.newServerName = (<HTMLInputElement>event.target).value;
  // }
}
