import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ParentComponent } from './parentComponent';
import { ChildComponent } from './childComponent';
import { AppComponent } from './app.component';
import { ModalDemoComponent } from './modal-demo.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Ng2Bs3ModalModule
    ],
    declarations: [
        AppComponent,
        ChildComponent,
        ParentComponent,
        ModalDemoComponent
    ],
    providers: [ModalDemoComponent],
    bootstrap: [AppComponent]

})
export class AppModule {
}