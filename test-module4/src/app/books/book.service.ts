import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private baseUrl="http://localhost:3000/books"
  constructor(private http: HttpClient) { }

  getBookList(){
    return this.http.get(`${this.baseUrl}`)
  }

  createBook(value: any){
    return this.http.post(`${this.baseUrl}`,value)
  }
  getBook(id: any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateBook(id: any, value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  deleteBook(id: any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
