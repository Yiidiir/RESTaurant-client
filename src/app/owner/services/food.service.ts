import {Injectable} from '@angular/core';
import {IOrder} from '../../user/client/my-orders/order.model';
import {tap} from 'rxjs/operators';
import {ITable} from '../manage-restaurant/table.model';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../user/auth.service';
import {IFood} from '../manage-restaurant/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  addFood(newFood: IFood) {

    return this.http.post('/api/foods/', newFood, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

  removeFood(foodToRemove: IFood) {
    if (confirm('Are you sure you want to remove ' + foodToRemove.name + ' ?')) {
      return this.http.delete('/api/foods/' + foodToRemove.id, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
      }));
    }
  }

  editFood(editedFood: IFood) {
    console.log(editedFood);
    const headers = this.auth.getHttpHeadersWithToken();
    headers.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return this.http.patch('/api/foods/' + editedFood.id, editedFood, headers).pipe(tap(data => {
    }));
  }
}
