import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Prodact } from './products'
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdactsService {

  constructor(private http: HttpClient) { }

  getProdacts(): Observable<Prodact[]> {
    return this.http.get<Prodact[]>("https://vue-e-commerce-databse.herokuapp.com/products")
      .pipe(
        catchError(this.errorHandeler)// handle the error
      );
  }
  errorHandeler(error: HttpErrorResponse) { //error function
    return throwError('Something bad happened; please try again later.');
  }
}
