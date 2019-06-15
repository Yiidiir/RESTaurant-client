import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  httpOptionsWithBearer = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.getToken()
    })
  };

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getAllRestaurants() {

    return this.http.get('/api/restaurants/', this.httpOptionsWithBearer).pipe(tap(data => {
    }));
  }

  getRestaurant(restaurantId: number) {
    return this.http.get('/api/restaurants/' + restaurantId, this.httpOptionsWithBearer).pipe(tap(data => {
    }));
  }

}
