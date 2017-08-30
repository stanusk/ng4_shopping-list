import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	@HostBinding('class.open') isOpen = false;

	@HostListener('click')
	toggle () {
		this.isOpen = !this.isOpen;
	}

	@HostListener('document:click', ['$event.target'])
	clickOutside (target: HTMLElement) {
		if (!this.elRef.nativeElement.contains(target)) {
			this.isOpen = false;
		}
	}

	@HostListener('keyup.escape')
	close () {
		this.isOpen = false;
	}

	constructor (private elRef: ElementRef) {}

}
