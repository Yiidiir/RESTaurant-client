import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from '../../../../user/client/my-orders/order.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../../../user/auth.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderToInspect: IOrder;
  orderDetails: any;

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  ngOnInit() {
    this.loadDetails();
  }

  loadDetails() {
    return this.http.get('/api/orders/' + this.orderToInspect.id + '/details', this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    })).subscribe(result => {
      this.orderDetails = result;
    });
  }

}
