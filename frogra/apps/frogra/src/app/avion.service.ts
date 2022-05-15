import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Avion } from './avion';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class AvionService {

  private avionsUrl = 'api/avions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET avions from the server */
  getAvions(): Observable<Avion[]> {
    return this.http.get<Avion[]>(this.avionsUrl)
      .pipe(
        tap(_ => this.log('fetched avions')),
        catchError(this.handleError<Avion[]>('getAvions', []))
      );
  }

  /** GET avion by id. Return `undefined` when id not found */
  getAvionNo404<Data>(id: number): Observable<Avion> {
    const url = `${this.avionsUrl}/?id=${id}`;
    return this.http.get<Avion[]>(url)
      .pipe(
        map(avions => avions[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} avion id=${id}`);
        }),
        catchError(this.handleError<Avion>(`getAvion id=${id}`))
      );
  }

  /** GET avion by id. Will 404 if id not found */
  getAvion(id: number): Observable<Avion> {
    const url = `${this.avionsUrl}/${id}`;
    return this.http.get<Avion>(url).pipe(
      tap(_ => this.log(`fetched avion id=${id}`)),
      catchError(this.handleError<Avion>(`getAvion id=${id}`))
    );
  }

  /* GET avions whose name contains search term */
  searchAvions(term: string): Observable<Avion[]> {
    if (!term.trim()) {
      // if not search term, return empty avion array.
      return of([]);
    }
    return this.http.get<Avion[]>(`${this.avionsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found avions matching "${term}"`) :
         this.log(`no avions matching "${term}"`)),
      catchError(this.handleError<Avion[]>('searchAvions', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new avion to the server */
  addAvion(avion: Avion): Observable<Avion> {
    return this.http.post<Avion>(this.avionsUrl, avion, this.httpOptions).pipe(
      tap((newAvion: Avion) => this.log(`added avion w/ id=${newAvion.id}`)),
      catchError(this.handleError<Avion>('addAvion'))
    );
  }

  /** DELETE: delete the avion from the server */
  deleteAvion(id: number): Observable<Avion> {
    const url = `${this.avionsUrl}/${id}`;

    return this.http.delete<Avion>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted avion id=${id}`)),
      catchError(this.handleError<Avion>('deleteAvion'))
    );
  }

  /** PUT: update the avion on the server */
  updateAvion(avion: Avion): Observable<any> {
    return this.http.put(this.avionsUrl, avion, this.httpOptions).pipe(
      tap(_ => this.log(`updated avion id=${avion.id}`)),
      catchError(this.handleError<any>('updateAvion'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AvionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AvionService: ${message}`);
  }
}