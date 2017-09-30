import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxComponent } from './sandbox.component';

const sandboxRoutes: Routes = [
	{ path: 'sandbox', component: SandboxComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(sandboxRoutes)
	],
	exports: [RouterModule]
})
export class SandboxRoutesModule {}
