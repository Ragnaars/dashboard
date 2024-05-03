import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartService {
  url = apiServer.url;
  constructor(private http: HttpClient) { }

  getCantPedByCli(url: any): Observable<any> {
    return this.http.get(`${this.url}${url}`);
  }
}
