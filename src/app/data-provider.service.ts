import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private baseURL = 'http://localhost:5000';

  constructor(private http: Http) { }


  getImageList(): Observable<Response>{
    return this.http.get( this.baseURL + '/imgs/' );
  }

  getImage(imageId: String): Observable<Response>{
    return this.http.get( this.baseURL + '/imgs/' + imageId );
  }


}
