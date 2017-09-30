import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: 'server.component.html',
	styles: [`
        .online {
            color: white;
        }
	`]
})
export class ServerComponent {
	@Input() server;

	@Input()
	set someChangingInput (o: { s: string }) {
		console.log(o.s);
	};

	serverStatus: string;

	constructor () {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus (): string {
		return this.serverStatus;
	}

	getColor () {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}
