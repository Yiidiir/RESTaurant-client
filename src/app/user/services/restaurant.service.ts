import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {IRestaurant} from '../client/restaurant/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getAllRestaurants() {

    return this.http.get('/api/restaurants/', this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

  getRestaurant(restaurantId: number) {
    return this.http.get('/api/restaurants/' + restaurantId, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

  updateRestaurant(restaurant: IRestaurant) {
    console.log(restaurant);
    const headers = this.auth.getHttpHeadersWithToken();
    headers.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return this.http.patch('/api/restaurants/' + restaurant.id, restaurant, headers).pipe(tap(data => {
    }));
  }

  getAvailableTables(restaurantId: number, classx: number, peopleCount: number, date: string, time: string) {
    return this.http.get('/api/restaurants/' + restaurantId +
      '/availableTables/' + classx + '/' + peopleCount +
      '/' + date + '/' + time, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

  addRestaurant(restaurant: IRestaurant) {
    console.log(restaurant);
    const headers = this.auth.getHttpHeadersWithToken();
    return this.http.post('/api/restaurants/', restaurant, headers).pipe(tap(data => {
    }));
  }
}
