import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item-component',
  templateUrl: './add-item-component.component.html',
  styleUrls: ['./add-item-component.component.css']
})
export class AddItemComponentComponent implements OnInit {
  inImgLink = '';
  inItemName = '';

  @Output() newItem = new EventEmitter();


  constructor() { }
  ClearBtn = () => {
    this.inImgLink = '';
    this.inItemName = '';
  };

  SubmitBtn = () => {
    if (this.inImgLink === '' || this.inItemName === '') {
      return;
    }
    this.newItem.emit({ name: this.inItemName, img: this.inImgLink });
  };

  ngOnInit(): void {
  }

}
