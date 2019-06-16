import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTableComponent} from '../add-table/add-table.component';
import {EditTableComponent} from '../edit-table/edit-table.component';

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.css']
})
export class ManageTablesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openAddTable() {
    this.modalService.open(AddTableComponent);
  }
  openEditTable() {
    this.modalService.open(EditTableComponent);
  }

}
