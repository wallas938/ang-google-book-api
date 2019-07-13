import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  displayQuery(query: String) {
    console.log(query)
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + query
    ).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
