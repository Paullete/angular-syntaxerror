import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  cars = ['Probox', 'Audi', 'Lexus'];
  constructor() { }

  ngOnInit(): void {
  }
  addACar = (car: string) => {
    this.cars.push(car);
  };

}
