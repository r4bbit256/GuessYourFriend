import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoggerService } from '../logger/logger.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class BaseApiRequestsService {
    constructor(private http: HttpClient, private logger: LoggerService) {}

    get<T>(url: string): Observable<T> {
        return this.http.get<T>(url).pipe(retry(3), catchError(this.handleError));
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.http.post<T>(url, data, httpOptions).pipe(catchError(this.handleError));
    }

    delete(url: string, id: number): Observable<{}> {
        return this.http.delete(`${url}/${id}`, httpOptions).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            this.logger.logError('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            this.logger.logError(`Backend returned code ${error.status}, body was: ${error.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }
}
