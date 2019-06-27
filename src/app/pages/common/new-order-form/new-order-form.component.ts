import {Component, OnInit} from '@angular/core';
import {IOrder} from '../../../user/client/my-orders/order.model';
import {OrderService} from '../../../user/services/order.service';
import {Router} from '@angular/router';
import {RestaurantService} from '../../../user/services/restaurant.service';
import {IRestaurant} from '../../../user/client/restaurant/restaurant.model';
import {AuthService} from '../../../user/auth.service';
import {IFood} from '../../../owner/manage-restaurant/food.model';
import {ICart} from '../../../user/client/my-orders/cart.model';
import {NgbAlertConfig, NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {WorkHoursService} from '../../../owner/services/work-hours.service';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {
  newOrder: IOrder;
  allRestaurants: IRestaurant[] = [];
  orderDate: string = new Date().toISOString().slice(0, 10);
  orderTime = {hour: 13, minute: 30};
  restaurantId: number;
  loadedO = false;
  selectedFood: IFood;
  liveCart: ICart = <ICart> {foods: []};
  orderType = '0';
  deliveryAddress: string;
  peopleCount = 1;
  tableClass = 3;
  restaurantOpenStatus: any;

  constructor(private orderS: OrderService, private router: Router, private restaurantS: RestaurantService,
              private auth: AuthService, config: NgbTimepickerConfig, private workHoursService: WorkHoursService,
              private alertConfig: NgbAlertConfig) {
    config.spinners = false;
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = <IRestaurant[]>data['data'];
      this.restaurantId = this.allRestaurants[0].id;
      this.loadedO = true;
    });
  }

  makeNewOrder(formValues) {
    if (this.auth.isAuthenticated()) {
      this.newOrder = <IOrder>formValues;
      this.newOrder.order_time = this.orderTime.hour + ':' + this.orderTime.minute;
      this.newOrder.order_time = Math.floor(new Date(formValues.order_date + ' ' + formValues.order_time).getTime() / 1000).toString();
      this.newOrder.menu_id = 0;
      this.newOrder.foods = JSON.stringify(this.liveCart.foods.map((food) => food.id));
      this.newOrder.order_type = this.orderType;
      console.log(this.newOrder);
      this.orderS.makeOrder(this.newOrder).subscribe((data) => {
        alert('Thank you for your order');
        this.router.navigate(['user/my-orders']);
      });
    } else {
      alert('Please Login or Create an account!');
    }
  }

  get availableFoods() {
    if (this.loaded) {
      return this.allRestaurants.find((resto) => {
        return +this.restaurantId === +resto.id;
      }).foods;
    }
  }

  get getSelectedRestaurant() {
    if (this.loaded) {
      return this.allRestaurants.find((resto) => {
        return +this.restaurantId === +resto.id;
      });
    }
  }

  get loaded() {
    return this.loadedO;
  }

  addToCart() {
    this.liveCart.foods.push(this.availableFoods.find((food) => {
      return +food.id === +this.selectedFood;
    }));
    this.selectedFood = null;
    console.log(this.liveCart);
  }

  get getFoodInCart() {
    return this.liveCart.foods;
  }

  resetCart() {
    this.liveCart.foods = [];
  }

  removeItem(id) {
    this.liveCart.foods = this.liveCart.foods.filter((food) => {
      return +food.id !== +id;
    });
  }

  checkRestaurantOpenStatus() {
    const orderDate = this.orderDate;
    const orderTime = this.orderTime.hour + ':' + this.orderTime.minute;
    this.workHoursService.isOpen(orderDate, orderTime, +this.restaurantId).subscribe(res => {
      this.restaurantOpenStatus = res;
    });
  }

}
