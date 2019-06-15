import {Component, OnInit} from '@angular/core';
import {IOrder} from '../../../user/client/my-orders/order.model';
import {OrderService} from '../../../user/services/order.service';
import {Router} from '@angular/router';
import {RestaurantService} from '../../../user/services/restaurant.service';
import {IRestaurant} from '../../../user/client/restaurant/restaurant.model';
import {AuthService} from '../../../user/auth.service';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {
  newOrder: IOrder;
  allRestaurants: IRestaurant[];
  orderDate: number;
  orderTime: number;

  constructor(private orderS: OrderService, private router: Router, private restaurantS: RestaurantService,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = data.data;
      console.log(this.allRestaurants);
    });
  }

  makeNewOrder(formValues) {
    if (this.auth.isAuthenticated()) {
      this.newOrder = formValues;
      this.newOrder.order_time = Math.floor(new Date(formValues.order_date + ' ' + formValues.order_time).getTime() / 1000).toString();
      this.newOrder.menu_id = 1;
      console.log(this.newOrder);
      this.orderS.makeOrder(this.newOrder).subscribe((data) => {
        alert('Thank you for your order');
        this.router.navigate(['user/my-orders']);
      });
    } else {
      alert('Please Login or Create an account!');
    }
  }

}
