import {Component, Input, OnInit} from '@angular/core';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';

@Component({
  selector: 'app-manage-foods',
  templateUrl: './manage-foods.component.html',
  styleUrls: ['./manage-foods.component.css']
})
export class ManageFoodsComponent implements OnInit {
  @Input() restaurant: IRestaurant;

  constructor() {
  }

  ngOnInit() {
  }

}
