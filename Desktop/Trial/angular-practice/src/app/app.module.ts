import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MyFirstComponent} from "./intro/my-component/my-component";

import { MySecondComponentComponent } from './intro/my-component/my-second-component/my-second-component.component'
import TheInterpolationComponent from './basics/databinding/interpolationcomponet/interpolation-component';
import { PropertyBindingComponent } from './basics/databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './basics/databinding/event-binding/event-binding.component';
import { GoalComponent } from './goal/goal/goal.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalDetailComponent } from './goal/goal-detail/goal-detail.component';
import { TwoWayDataBindingComponent } from './basics/databinding/two-way-data-binding/two-way-data-binding/two-way-data-binding.component';
import { StructuralDirectivesComponent } from './basics/directives/structural-directives/structural-directives.component';
import { TheChildComponentComponent } from './basics/component-data-binding/child-parent/the-child-component/the-child-component.component';
import { ParentComponentComponent } from './basics/component-data-binding/parent-child/parent-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent, MyFirstComponent, MySecondComponentComponent, TheInterpolationComponent, PropertyBindingComponent, EventBindingComponent, GoalComponent, DateCountPipe, GoalDetailComponent, TwoWayDataBindingComponent, StructuralDirectivesComponent, TheChildComponentComponent, ParentComponentComponent, 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
