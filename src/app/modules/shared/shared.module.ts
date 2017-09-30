import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
	declarations: [
		DropdownDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		DropdownDirective
	]
})
export class SharedModule {}
