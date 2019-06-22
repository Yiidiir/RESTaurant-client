import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {RestaurantService} from '../../../../user/services/restaurant.service';

@Component({
  selector: 'app-edit-restaurant-info',
  templateUrl: './edit-restaurant-info.component.html',
  styleUrls: ['./edit-restaurant-info.component.css']
})
export class EditRestaurantInfoComponent implements OnInit {
  @Input() restaurant: IRestaurant;
  @Output() askReload = new EventEmitter();
  class: number;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.class = this.restaurant.class;
  }

  updateRestaurant(formValues) {
    const updatedRestaurant = <IRestaurant>formValues;
    updatedRestaurant.class = this.class;
    updatedRestaurant.id = this.restaurant.id;
    this.restaurantService.updateRestaurant(updatedRestaurant).subscribe((result) => {
      alert('Restaurant data updated!');
      this.askReload.emit('reload');
    });
  }
}
