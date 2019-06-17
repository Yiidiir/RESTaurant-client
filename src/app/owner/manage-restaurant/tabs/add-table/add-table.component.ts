import {Component, Input, OnInit} from '@angular/core';
import {ITable} from '../../table.model';
import {TableService} from '../../../services/table.service';
import {Router} from '@angular/router';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  newTable: ITable;
  class: any;
  @Input() restaurant: IRestaurant;

  constructor(private tableS: TableService, private router: Router, private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  addNewTable(formValues) {
    console.log(formValues);
    this.newTable = <ITable> formValues;
    this.newTable.class = this.class;
    this.newTable.restaurant_id = this.restaurant.id;
    console.log(this.newTable);
    this.tableS.addTable(this.newTable).subscribe((data) => {
      alert('Table add success');
      this.router.navigate(['owner/manage-restaurants/3']);
    });
  }

}
