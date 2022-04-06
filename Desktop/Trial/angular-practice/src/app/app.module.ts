import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyFirstComponent} from "./my-component/my-component";
import { MySecondComponentComponent } from './my-second-component/my-second-component.component'
@NgModule({
  declarations: [
    AppComponent, MyFirstComponent, MySecondComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
