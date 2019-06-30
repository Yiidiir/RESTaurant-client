import {Injectable} from '@angular/core';
import {IOrder} from './my-orders/order.model';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  generateTransaction(transaction, orderId: number) {
    return this.http.post('/api/orders/' + orderId + '/charge-card', transaction, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

}
