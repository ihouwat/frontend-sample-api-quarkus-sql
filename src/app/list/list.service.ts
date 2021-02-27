import { Injectable } from '@angular/core';
import { ITEMS } from '../db-fake';
import { Observable, of } from 'rxjs';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private itemsURL = 'http://localhost:8080/list';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL);
  }
}
