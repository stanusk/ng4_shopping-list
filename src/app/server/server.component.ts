
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'running';

  getServerStatus = this._getServerStatus;

  private _getServerStatus (): string {
    return this.serverStatus + ' smoothly...';
  }
}
