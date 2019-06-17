import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTableComponent} from '../add-table/add-table.component';
import {EditTableComponent} from '../edit-table/edit-table.component';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {ITable} from '../../table.model';

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.css']
})
export class ManageTablesComponent implements OnInit {
  @Input() restaurant: IRestaurant;
  tables: ITable[];
  tablesRowOne: ITable[] = [];
  tablesRowTwo: ITable[] = [];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.tables = this.restaurant.tables;
    this.getTablesInRows();
  }

  openAddTable() {
    console.log(this.restaurant.tables);
    const addTableModel = this.modalService.open(AddTableComponent);
    addTableModel.componentInstance.restaurant = this.restaurant;
  }

  openEditTable() {
    this.modalService.open(EditTableComponent);
  }

  getTablesInRows() {
    if (this.tables.length < 4) {
      this.tablesRowOne = this.tables;
    } else {
      const halfCount = Math.floor(this.tables.length / 2);
      this.tables.forEach((table) => {
        if (this.tablesRowOne.length < halfCount) {
          this.tablesRowOne.push(table);
        } else {
          this.tablesRowTwo.push(table);
        }
      });
    }
  }
}

