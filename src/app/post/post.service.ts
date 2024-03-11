import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  errorHandler: ((err: any, caught: Observable<Object>) => ObservableInput<any>) | undefined;


  constructor(private httpClient:HttpClient) {  }

  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/').pipe(catchError((error:HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  create(post:Post):Observable<any>{
    return this.httpClient.post(this.apiURL+'/posts/', JSON.stringify(post), this.httpOptions).pipe(catchError((error:HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/'+id).pipe(catchError((error:HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  update(id:number, post:Post):Observable<any>{
    return this.httpClient.put(this.apiURL+'/posts/'+id, JSON.stringify(post), this.httpOptions).pipe(catchError((error:HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete(this.apiURL+'/posts/'+id).pipe(catchError((error:HttpErrorResponse) => {
      return throwError(error);
    }))
  }
}
