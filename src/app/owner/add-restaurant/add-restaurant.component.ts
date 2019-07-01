import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestaurantService} from '../../user/services/restaurant.service';
import {IRestaurant} from '../../user/client/restaurant/restaurant.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  restaurantName: string;
  restaurantAddress: string;
  class: number;
  @Output() restaurantAdded = new EventEmitter();

  constructor(private restaurantService: RestaurantService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  addRestaurant(formValues) {
    const newRest = <IRestaurant> formValues;
    newRest.class = this.class;
    this.restaurantService.addRestaurant(newRest).subscribe(result => {
      alert('Restaurant Added!');
      this.close();
    });
  }

  close() {
    this.modalService.dismissAll();
    this.restaurantAdded.emit('reload');

  }
}
