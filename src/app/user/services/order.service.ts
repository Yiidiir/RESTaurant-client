import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';
import {IOrder} from '../client/my-orders/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  makeOrder(newOrder: IOrder) {

    return this.http.post('/api/orders/', newOrder, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }
}
