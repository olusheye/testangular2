import { ClientRequest } from '../models/ClientRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientRequestService {
  private url = 'http://localhost:59269/api/values';
  constructor(private http: HttpClient) {}
  getTestData(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
  postTestData(clientReqMsg: ClientRequest): Observable<string[]> {
    return this.http.post<string[]>(this.url, clientReqMsg);
  }
}
