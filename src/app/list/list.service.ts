import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListItem } from '../model/listItem';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseURL = 'http://localhost:8080/list';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getItems(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.baseURL);
  }

  addItem(item:string): Observable<ListItem> {
    return this.http.post<ListItem>(this.baseURL, item, this.httpOptions);
  }

  deleteItem(id:Number): Observable<ListItem> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<ListItem>(url,this.httpOptions);
  }

  updateItem(newValue:string, id:number) {
    const url = `${this.baseURL}?itemId=${id}&updatedItem=${newValue}`
    return this.http.put<ListItem>(url,this.httpOptions);
  }

}
