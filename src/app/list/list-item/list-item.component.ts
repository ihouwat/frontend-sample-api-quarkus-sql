import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Item } from '../../model/item';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items:Item[] = [];
  
  getListItems(): void {
    this.listService.getItems()
      .subscribe(items => this.items = items);
  }
    
    constructor(private listService: ListService) {}
    
  ngOnInit(): void {
    this.getListItems();
  }

}
