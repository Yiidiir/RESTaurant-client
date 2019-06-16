import {Component, OnInit} from '@angular/core';
import {ITable} from '../../table.model';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  newTable: ITable;
  class: any;

  constructor() {
  }

  ngOnInit() {
  }

}
