import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '../model/client';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

     //endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

     httpOptions = {
        headers: new HttpHeaders({
             'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        })
    }



    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getClient(id:any): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + id)
            .pipe(
                catchError(this.handleError)
            )
    }

    createClient(client:Client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateClient(id:any, client:Client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    deleteClient(id:any) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    handleError(error:any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error(errorMessage));
    }

}
