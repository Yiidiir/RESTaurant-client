import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../user/services/restaurant.service';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allRestaurants: IRestaurant[];
  constructor(private restaurantS: RestaurantService) { }

  ngOnInit() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = data['data'];
      console.log(this.allRestaurants);
    });
  }

}
