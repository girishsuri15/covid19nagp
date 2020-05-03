import { Injectable } from '@angular/core';
import { Inews } from '../model/Inews';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/Operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  private apiURL = "api/newDetail";

  constructor(private http: HttpClient) { }

  /** GET ALL user detail. */
  getNewsDetails(): Observable<Inews[]> {
    return this.http.get<Inews[]>(this.apiURL);
  }

  addNews(newNews: Inews): Observable<Inews> {
    return this.http.post<Inews>(this.apiURL, newNews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
