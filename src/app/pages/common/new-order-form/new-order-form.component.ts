import {Component, OnInit} from '@angular/core';
import {IOrder} from '../../../user/client/my-orders/order.model';
import {OrderService} from '../../../user/services/order.service';
import {Router} from '@angular/router';
import {RestaurantService} from '../../../user/services/restaurant.service';
import {IRestaurant} from '../../../user/client/restaurant/restaurant.model';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {
  newOrder: IOrder;
  allRestaurants: IRestaurant[];

  constructor(private orderS: OrderService, private router: Router, private restaurantS: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = data.data;
      console.log(this.allRestaurants);
    });
  }

  makeNewOrder() {
    this.orderS.makeOrder().subscribe((data) => {
      alert('Thank you for your order');
      this.router.navigate(['my-orders']);
    });
  }

}
