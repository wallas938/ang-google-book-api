import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryService } from '../services/query.service';
import { Subscriber, Subscription } from 'rxjs';
import { Ibook } from '../interfaces/Ibook';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit, OnDestroy {

  books: Ibook[] = []

  booksSubscription: Subscription

  userQuery = new FormControl('')

  constructor(
    private queryService: QueryService) { 
  }

  ngOnInit() {
  }

  bookDisplayer() {

  }

  onSubmit() {
    this.booksSubscription = this.queryService.getBook(this.userQuery.value).subscribe(
      books => {
        this.books = books.items.map(book => {
          let formatedBook: Ibook = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description,
            language: book.volumeInfo.language,
          }
          console.log(books)
          return formatedBook
        })
        console.log(this.books)
      }
    )
    this.userQuery.setValue('')
  }
  
  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
