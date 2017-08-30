import { Component } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
	private DEF_SERV_NAME = '';

	allowAddServer = false;


	objectWithChangingProp = {s: 'default'};
	newServerName: string;

	serverCreated = false;

	servers: Array<string> = ['Test server', 'Some other server'];


	constructor () {
		this.newServerName = this.DEF_SERV_NAME;
		setTimeout(() => this.allowAddServer = true, 2000);
	}

	onServerCreation () {
		this.serverCreated = true;

		this.servers.push(this.newServerName);
		this.newServerName = this.DEF_SERV_NAME;
	}
}
