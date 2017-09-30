import * as _ from 'lodash';

import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appBasicBorder]'
})
export class HoverBorderDirective implements OnInit {
	private defaultColor = 'transparent';

	@Input('appBasicBorder') colors: Array<string>;

	@HostBinding('style.border') border = `10px solid ${this.defaultColor}`;
	@HostBinding('style.borderColor') borderColor: string;

	@HostListener('mouseover')
	onHover () {
		this.setBorderColor();
	}

	ngOnInit () {
	}

	setBorderColor () {
		this.borderColor = _.sample(this.colors || [this.defaultColor]);
	}
}
