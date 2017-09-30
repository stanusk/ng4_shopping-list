
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SandboxComponent } from './x_sandbox/sandbox.component';

const routing: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/shopping-list' },
	{ path: 'shopping-list', component: ShoppingListComponent },
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