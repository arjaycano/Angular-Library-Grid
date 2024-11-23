import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    { id: 1, title: 'Love In The Big City', author: 'Sang Young Park', genre: 'Coming-Of-Age Story, Gay Fiction', year: 2022, coverImage: 'assets/img/book1.jpg' },
    { id: 2, title: 'The Ravels', author: 'Josevfthegreat', genre: 'Romance Novel, Contemporary Romance, New Adult Fiction', year: 2024, coverImage: 'assets/img/book2.jpg' },
    { id: 3, title: 'Project Loki Volume 4 Part 2', author: 'Akosiibarra', genre: 'Detective Novel', year: 2024, coverImage: 'assets/img/book3.jpg' },
    { id: 4, title: 'The Wonderful Wizard of Oz', author: 'Lyman Frank Baum', genre: 'Children\'s literature, Fantasy Fiction', year: 2024, coverImage: 'assets/img/book4.jpg' },
    { id: 5, title: 'Winning Study Abroad', author: 'Ma. Regina', genre: 'Non-Fiction', year: 2019, coverImage: 'assets/img/book5.jpg' }
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
