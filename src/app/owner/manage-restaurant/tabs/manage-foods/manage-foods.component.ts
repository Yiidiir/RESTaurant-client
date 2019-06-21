import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddFoodComponent} from '../add-food/add-food.component';
import {FoodService} from '../../../services/food.service';
import {IFood} from '../../food.model';
import {EditFoodComponent} from '../edit-food/edit-food.component';

@Component({
  selector: 'app-manage-foods',
  templateUrl: './manage-foods.component.html',
  styleUrls: ['./manage-foods.component.css']
})
export class ManageFoodsComponent implements OnInit {
  @Input() restaurant: IRestaurant;
  @Output() askReload = new EventEmitter();


  constructor(private modalService: NgbModal, private foodS: FoodService) {
  }

  ngOnInit() {
  }

  openAddFood() {
    const addFoodModel = this.modalService.open(AddFoodComponent);
    addFoodModel.componentInstance.restaurant = this.restaurant;
    addFoodModel.componentInstance.foodAdded.subscribe(($e) => {
      this.askReloadAction();
    });
  }

  askReloadAction() {
    console.log('asking restaurant to reload');
    this.askReload.emit('reload');
  }

  deleteFood(foodToDelete: IFood) {
    this.foodS.removeFood(foodToDelete).subscribe(($e) => {
      this.askReload.emit('reload');
    });
  }

  openEditFood(foodToEdit: IFood) {
    const editFoodModel = this.modalService.open(EditFoodComponent);
    editFoodModel.componentInstance.restaurant = this.restaurant;
    editFoodModel.componentInstance.foodToEdit = foodToEdit;
    editFoodModel.componentInstance.foodEdited.subscribe(($e) => {
      this.askReloadAction();
    });
  }

}
