import {Component, OnInit} from '@angular/core';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';
import {RestaurantService} from '../../user/services/restaurant.service';

@Component({
  selector: 'app-manage-restaurants',
  templateUrl: './manage-restaurants.component.html',
  styleUrls: ['./manage-restaurants.component.css']
})
export class ManageRestaurantsComponent implements OnInit {
  allRestaurants: IRestaurant[];

  constructor(private restaurantS: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = data['data'];
      console.log(this.allRestaurants);
    });
  }

}
