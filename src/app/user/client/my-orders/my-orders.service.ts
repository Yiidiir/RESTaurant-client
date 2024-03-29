import {Injectable} from '@angular/core';
import {AuthService} from '../../auth.service';
import {HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {IUser} from '../../user.model';
import {HttpClient} from '@angular/common/http';
import {IOrder} from './order.model';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {
  myOrders: IOrder[];

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  getMyOrders(restaurantId = '') {
    const httpOptionsWithBearer = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getToken()
      })
    };

    return this.http.get('/api/orders/' + restaurantId, httpOptionsWithBearer).pipe(tap(data => {
      /*        console.log('Invalid Token');
              localStorage.removeItem('token');
              this.currentUser = null;*/
    }));
  }

  updateOrderStatus(orderId: number, newStatus: number) {
    return this.http.get('/api/orders/' + orderId + '/update-status/' + newStatus, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }
}
