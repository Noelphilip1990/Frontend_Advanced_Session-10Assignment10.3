import { Component } from '@angular/core';
import { ModalDemoComponent } from './modal-demo.component';
@Component({
    selector: 'modal-demo',
	template: `
	<parent-app></parent-app>`,
	
})

export class AppComponent{
	text: string = "Modal Sample Text";
	constructor()
	{
		
	}
}
