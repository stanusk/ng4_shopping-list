
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-observable-home',
	template: `
		<h1>observable home</h1>
		<p>is true: {{isTrue}}</p>
		<p>is true async: {{isTrue$ | async}}</p>
		<button (click)="toggle()">toggle</button>
	`
})
export class ObservablesHomeComponent implements OnInit {
	isTrue$ = new Subject();
	isTrue = false;

	toggle () {
		this.isTrue$.next(Date.now() % 2 === 0);
	}

	ngOnInit () {
		this.isTrue$.subscribe(
			((isTrue: boolean) => this.isTrue = isTrue)
		);

		const interval$ = Observable.interval(1000);

		interval$.subscribe(
			(n) => {console.log(n);}
		);

		const myObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
			let counter = 0;
			const interval = setInterval(() => {
				if (counter < 5) {
					observer.next(counter++);
				} else if (counter === 5) {
					observer.error('i dont like 5');
					counter++;
				} else {
					observer.complete();
					clearInterval(interval);
				}
			}, 1000);
		});

		myObservable.subscribe(
			n => { console.log(n); },
			err => { console.log(err); },
			() => { console.log('complete'); }
		);
	}
}
