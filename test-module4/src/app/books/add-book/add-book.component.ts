import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
book!: any;
  constructor(
    private service: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = new Book();
  }

  addBook(){
    this.service.createBook(this.book).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['books']);
        this.book = new Book();
      },error=>{
        console.log(error);
      }
    )
  }
}
