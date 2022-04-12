import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view-component',
  templateUrl: './card-view-component.component.html',
  styleUrls: ['./card-view-component.component.css']
})
export class CardViewComponentComponent implements OnInit {
  @Input('shopping_list_items') items: any = [];
  @Output('view-card-comp-delete') deleteItem = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  getItemVar(item: any, str: string) {
    return item[str];
  }

  Item_to_be_deleted(str: string) {
    this.deleteItem.emit(str);
  }

}
