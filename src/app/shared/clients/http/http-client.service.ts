import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  public httpGet<T>(endpoint: string, params: HttpParams = {} as HttpParams): Observable<T> {
    const httpOptions: { params?: HttpParams } = {};
    if (params) httpOptions.params = params;
    return this.http.get<T>(endpoint, httpOptions).pipe(
      tap(() => this.log(`fetched ${endpoint}`)),
      catchError(this.handleError<T>(`Get: ${endpoint}`))
    );
  }

  private handleError<T>(operation = 'operation'): (error: HttpErrorResponse) => Observable<T> {
    return (error: HttpErrorResponse): Observable<T> => {

      console.error(error);
      if (error.error instanceof Event) {
        throw error.error;
      }

      const message = `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };
  }

  public log(message: string, showLogs = !environment.production) {
    if (!showLogs) {
      console.log('HttpClient: ', message);
    }
  }

}
