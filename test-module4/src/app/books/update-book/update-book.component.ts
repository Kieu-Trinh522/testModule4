import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
id!: any;
book!: any;
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getBook(this.id).subscribe(
      data =>{
        this.book=data
      },error=>{
        console.log(error);
      }
    )
  }
  editBook(){
    this.service.updateBook(this.id,this.book).subscribe(
      data =>{
        this.router.navigate(['books'])
      },error => {
        console.log(error)
      }
    )
  }

}
