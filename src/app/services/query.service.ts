import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Ibook } from '../interfaces/Ibook';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  booksSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getBook(query: String): Observable<any>{
    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=' + query)
  }
  
}
