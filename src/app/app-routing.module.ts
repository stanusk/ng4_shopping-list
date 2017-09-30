
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './x_sandbox/sandbox.component';

const routing: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/shopping-list' },
	{ path: 'sandbox', component: SandboxComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routing)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}