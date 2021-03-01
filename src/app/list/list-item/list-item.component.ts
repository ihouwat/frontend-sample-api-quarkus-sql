import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../list.service';
import { ListItem } from '../../model/listItem';

@Component({
	selector: 'list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

	items: ListItem[] = [];
	@ViewChild('box') inputName; // input box name from html file

	constructor(private listService: ListService) {}

	getListItems(): void {
		this.listService.getItems()
      .subscribe(items => this.items = items);
	}

	addOnEnter(value: string) {
		// Add item to list
		this.listService.addItem(value)
			.subscribe(item => this.items.push(item));
			this.inputName.nativeElement.value = ''; // Empty input box
	}

	delete(value: ListItem) {
		this.listService.deleteItem(value.id)
			.subscribe(res => {
				const filteredList = this.items.filter(i => i.item !== res.item);
				this.items = filteredList;
			});
	}

	update(newValue: string, item: ListItem) {
		if (newValue !== item.item) {
			this.listService.updateItem(newValue, item.id)
			.subscribe(res => {
				this.items.forEach(i => {
					if (i.id === res.id) { i.item = res.item; } // update items view
				});
      });
		}
	}

	ngOnInit(): void {
		this.getListItems();
	}

}
