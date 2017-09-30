import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SandboxRoutesModule } from './sandbox-routes.module';
import { SharedModule } from '../shared/shared.module';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SandboxComponent } from './sandbox.component';
import { ObservablesHomeComponent } from './observables-home/observables-home.component';
import { HoverBorderDirective } from './directives/hoverBorder.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
	declarations: [
		ServerComponent,
		ServersComponent,
		SandboxComponent,
		ObservablesHomeComponent,

		HoverBorderDirective,
		UnlessDirective
	],
	imports: [
		SharedModule,
		SandboxRoutesModule,

		FormsModule
	]
})
export class NameModule {}
