import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Ibook } from '../interfaces/Ibook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  books = []

  getBook(query: String): Observable<Ibook[]>{
    return this.http.get<Ibook[]>('https://www.googleapis.com/books/v1/volumes?q=' + query)
  }
}
