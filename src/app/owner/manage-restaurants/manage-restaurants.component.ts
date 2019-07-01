import {Component, OnInit} from '@angular/core';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';
import {RestaurantService} from '../../user/services/restaurant.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddRestaurantComponent} from '../add-restaurant/add-restaurant.component';

@Component({
  selector: 'app-manage-restaurants',
  templateUrl: './manage-restaurants.component.html',
  styleUrls: ['./manage-restaurants.component.css']
})
export class ManageRestaurantsComponent implements OnInit {
  allRestaurants: IRestaurant[];

  constructor(private restaurantS: RestaurantService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.loadRestaurants();
  }

  openAddRestaurant() {
    const addRestaurantModel = this.modalService.open(AddRestaurantComponent);
    addRestaurantModel.componentInstance.restaurantAdded.subscribe(($e) => {
      this.loadRestaurants();
    });
  }

  loadRestaurants() {
    this.restaurantS.getAllRestaurants().subscribe((data) => {
      this.allRestaurants = data['data'];
      console.log(this.allRestaurants);
    });
  }

}
