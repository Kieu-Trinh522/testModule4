import { UpdateBookComponent } from './books/update-book/update-book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';

const routes: Routes = [
  {path: 'books',component: BookListComponent},
  {path: 'add',component: AddBookComponent},
  {path:'books/edit/:id',component: UpdateBookComponent},
  {path: 'books/show/:id',component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
