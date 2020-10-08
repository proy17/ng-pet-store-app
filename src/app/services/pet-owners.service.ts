import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import Owner from '../domain/owner';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class PetOwnersService {
  private readonly API_PEOPLE_URL = 'http://agl-developer-test.azurewebsites.net/people.json';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.API_PEOPLE_URL)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response): Observable<never> {
    if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error}`);
    }
    window.alert(error);
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
