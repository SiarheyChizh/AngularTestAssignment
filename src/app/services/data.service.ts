import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?' +
      'key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=' +
      '50&type=video&part=snippet&q=john');
  }
}
