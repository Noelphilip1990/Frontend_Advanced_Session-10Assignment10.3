import {Component} from '@angular/core';
import {ChildComponent} from './childComponent';
@Component({
	selector:'parent-app',
	template:`
	<h2>This is a parent section</h2><br>
	<child-app [title]='childTitle'></child-app>
	`
	//directives: [ChildComponent]
})
export class ParentComponent
{
	public childTitle="This is child component inside a parent."
	constructor(){}
} 