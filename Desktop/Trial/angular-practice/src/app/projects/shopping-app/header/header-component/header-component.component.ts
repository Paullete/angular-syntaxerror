import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  @Input() logo = 'Shoping List App';
  @Input() btn1 = 'New Item';
  @Input() btn2 = 'Card';
  @Output() btnPress = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  btnPressEvent = (str: string) => {
    this.btnPress.emit(str);
  };
}
