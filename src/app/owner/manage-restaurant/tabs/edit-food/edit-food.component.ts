import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodService} from '../../../services/food.service';
import {IFood} from '../../food.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  @Input() foodToEdit: IFood;
  @Output() foodEdited = new EventEmitter();

  constructor(private foodS: FoodService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  editFood(formValues) {
    const editedFoodK = <IFood> formValues;
    editedFoodK.id = this.foodToEdit.id;
    editedFoodK.restaurant_id = this.foodToEdit.restaurant_id;

    this.foodS.editFood(editedFoodK).subscribe((data) => {
      alert('Edit food success!');
      this.close();
    });
  }
  close() {
    this.modalService.dismissAll();
    this.foodEdited.emit('reload');

  }
}
