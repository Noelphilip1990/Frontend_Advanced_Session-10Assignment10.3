import { Component, Input } from '@angular/core';
@Component({
	selector: 'child-app',
	template: `<h2>{{title}}</h2>`
	
})
export class ChildComponent {
	@Input() title: string;
	constructor() { }
} 