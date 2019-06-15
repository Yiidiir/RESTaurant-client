import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllRestaurants() {
    const httpOptionsWithBearer = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getToken()
      })
    };

    return this.http.get('/api/restaurants/', httpOptionsWithBearer).pipe(tap(data => {
    }));
  }

}
