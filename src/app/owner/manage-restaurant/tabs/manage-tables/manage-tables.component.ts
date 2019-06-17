import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
export class ManageTablesComponent implements OnChanges {
  @Input() restaurant: IRestaurant;
  @Output() askReload = new EventEmitter();
  tables: ITable[];
  tablesRowOne: ITable[] = [];
  tablesRowTwo: ITable[] = [];

  constructor(private modalService: NgbModal) {
  }


  ngOnChanges(changes: SimpleChanges) {
    this.restaurant = changes.restaurant.currentValue;
    this.tables = this.restaurant.tables;
    if (changes.restaurant.currentValue !== changes.restaurant.previousValue) {
      this.getTablesInRows();
    }
  }

  openAddTable() {
    const addTableModel = this.modalService.open(AddTableComponent);
    addTableModel.componentInstance.restaurant = this.restaurant;
    addTableModel.componentInstance.tableCreated.subscribe(($e) => {
      this.askReloadAction();
    });
  }

  openEditTable() {
    const editTableModel = this.modalService.open(EditTableComponent);
    editTableModel.componentInstance.restaurant = this.restaurant;

  }

  getTablesInRows() {
    console.log('Loading tables');
    this.tables = this.restaurant.tables;
    this.tablesRowOne = [];
    this.tablesRowTwo = [];
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

  askReloadAction() {
    console.log('asking restaurant to reload');
    this.askReload.emit('reload');
  }
}

