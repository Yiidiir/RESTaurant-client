import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTableComponent} from '../add-table/add-table.component';
import {EditTableComponent} from '../edit-table/edit-table.component';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.css']
})
export class ManageTablesComponent implements OnInit {
  @Input() restaurant: IRestaurant;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openAddTable() {
    console.log(this.restaurant);
    const addTableModel = this.modalService.open(AddTableComponent);
    addTableModel.componentInstance.restaurant = this.restaurant;
  }
  openEditTable() {
    this.modalService.open(EditTableComponent);
  }

}
