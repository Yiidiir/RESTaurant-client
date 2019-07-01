import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from '../../../../user/client/my-orders/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderToInspect: IOrder;

  constructor() { }

  ngOnInit() {
  }

}
