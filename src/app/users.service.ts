import { Injectable } from '@angular/core';
import { delay } from "rxjs/operators"
import { from, throwError, Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { User } from './users'
import { catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  userUrl = "https://pharmacy-databeas.herokuapp.com/userCustomer-information"
  constructor(private http: HttpClient) { }
  getusers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        catchError(this.errorHandeler)// handle the error
      );
  }
  errorHandeler(error: HttpErrorResponse) { //error function
    return throwError('Something bad happened; please try again later.');
  }

  //  addUser
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions)
    // .pipe(delay(1500))// simulate network delay

  }
}
