
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-observable-home',
	template: `
		<h1>observable home</h1>
		<p>is true: {{isTrue}}</p>
		<p>is true async: {{isTrue$ | async}}</p>
		<button (click)="toggle()">toggle</button>
	`
})
export class ObservablesHomeComponent implements OnInit, OnDestroy {
	isTrue$ = new Subject();
	isTrue = false;

	private subs: Array<Subscription> = [];

	toggle () {
		this.isTrue$.next(Date.now() % 2 === 0);
	}

	ngOnInit () {
		this.addSubs(
			this.isTrue$.subscribe(
				((isTrue: boolean) => this.isTrue = isTrue)
			)
		);

		const interval$ = Observable.interval(1000);

		this.addSubs(
			interval$.subscribe(
				(n) => {console.log(n); }
			)
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

	ngOnDestroy () {
		this.subs.forEach(s => s.unsubscribe());
	}

	private addSubs (s: Subscription | Array<Subscription>) {
		this.subs = this.subs.concat(s);
	}
}
