import { Component } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation-component.html',
  
})
export default class InterpolationComponent {

        name: string = 'Interpolation Component';
        cars = ['Toyota', 'Prado', 'Bmw'];
        person = { name: 'Pote', age: 25, car: 'Prado' };
        isRich = true;
      
        constructor() {
          setTimeout(() => {
            this.name = 'Interpolation Component 2.0.0';
          }, 2000);
        }
      
  
}
