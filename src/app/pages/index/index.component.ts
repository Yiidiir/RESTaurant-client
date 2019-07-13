import {Component, OnInit} from '@angular/core';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';
import {OrderService} from '../../user/services/order.service';
import {Router} from '@angular/router';
import {IOrder} from '../../user/client/my-orders/order.model';
import {AuthService} from '../../user/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {

  }


}
