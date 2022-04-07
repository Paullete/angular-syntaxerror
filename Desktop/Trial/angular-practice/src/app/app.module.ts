import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyFirstComponent} from "./my-component/my-component";

import { MySecondComponentComponent } from './my-second-component/my-second-component.component'
import TheInterpolationComponent from './basics/databinding/interpolationcomponet/interpolation-component';
import { PropertyBindingComponent } from './basics/databinding/property-binding/property-binding.component'
@NgModule({
  declarations: [
    AppComponent, MyFirstComponent, MySecondComponentComponent, TheInterpolationComponent, PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
