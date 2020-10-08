import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import Owner from '../domain/owner';

@Injectable()
export class PetOwnersService {
  constructor(private httpClient: HttpClient) { }

  /**
   * Sned get request to the bakcend API to fetch people information
   *
   * @returns Observable of Owner array
   */
  public sendGetRequest(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(environment.apiPeopleUrl)
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
