import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
  }

  getUsers() {
    return this.http.get(`${environment.API_URL}/users/?page=1&limit=10`, this.httpOptions);
  }

  getPosts(id: any) {
    return this.http.get(`${environment.API_URL}/users/${id}/posts?page=1&limit=10`, this.httpOptions);
  }
}
