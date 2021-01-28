import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  getBook(id: any) {
    throw new Error('Method not implemented.');
  }
books!:any;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.bookService.getBookList().subscribe(
      data =>{
        this.books = data
      },error =>{
        console.log(error);
      }
    )
  }

  deleteBook(id: any){
    if(window.confirm('Bạn có chắc chắn muốn xóa ?')){
      this.bookService.deleteBook(id).subscribe(
        data =>{
          this.loadData();
        },error =>{
          console.log(error);
        }
      )
    }
  }

}
