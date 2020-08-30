import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  public baseUrl: string;

  constructor(
    public http: HttpClient
  ) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
      .pipe(map(response => response));
  }

  fetchItemContent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
      .pipe(map(response => response));
  }

  fetchUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`)
      .pipe(map(response => response));
  }
}
