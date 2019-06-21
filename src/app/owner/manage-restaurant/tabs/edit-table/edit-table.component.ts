import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITable} from '../../table.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TableService} from '../../../services/table.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  @Input() tableToEdit: ITable;
  @Output() tableEdited = new EventEmitter();
  class: number;

  constructor(private modalService: NgbModal, private tableService: TableService) {
  }

  ngOnInit() {
    this.class = this.tableToEdit.class;
    console.log(this.tableToEdit);
  }

  close() {
    this.modalService.dismissAll();
    this.tableEdited.emit('reload');

  }

  editTable(formValues) {
    this.tableToEdit.class = this.class;
    this.tableService.editTable(this.tableToEdit).subscribe((data) => {
      alert('Edit table success!');
      this.close();
    });
  }


}
