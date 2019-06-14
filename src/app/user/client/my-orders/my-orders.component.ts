import {Component, OnInit} from '@angular/core';
import {MyOrdersService} from './my-orders.service';
import {IOrder} from './order.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders: IOrder[] = [];


  constructor(private orderService: MyOrdersService) {
  }

  ngOnInit() {
    this.orderService.getMyOrders().subscribe((data) => {
      this.myOrders = data['data'];
    });
  }

  getBadgeColor(status) {
    if (status === 'Processing') {
      return 'warning';
    } else {
      if (status === 'Completed') {
        return 'success';
      } else {
        return 'secondary';
      }
    }
  }


}
