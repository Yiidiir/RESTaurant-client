import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {IFood} from '../../food.model';
import {Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FoodService} from '../../../services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  newFood: IFood;
  @Input() restaurant: IRestaurant;
  @Output() foodAdded = new EventEmitter();

  constructor(private foodS: FoodService, private router: Router, private modalService: NgbActiveModal) {
  }

  ngOnInit() {
  }

  addNewFood(formValues) {
    console.log(formValues);
    this.newFood = <IFood> formValues;
    this.newFood.restaurant_id = this.restaurant.id;
    console.log(this.newFood);
    this.foodS.addFood(this.newFood).subscribe((data) => {
      alert('Food Add success');
      this.foodAdded.emit('reload');
      this.modalService.close();
    });
  }


}
