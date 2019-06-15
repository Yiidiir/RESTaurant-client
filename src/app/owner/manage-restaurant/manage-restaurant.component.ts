import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../user/services/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.css']
})
export class ManageRestaurantComponent implements OnInit {
  restaurant: IRestaurant;
  constructor(private restaurantS: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantS.getRestaurant(+this.route.snapshot.params['id']).subscribe((data) => {
      this.restaurant = <IRestaurant> data;
      console.log(this.restaurant);
    });
  }

}
