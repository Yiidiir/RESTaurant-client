import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITable} from '../../table.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  @Input() tableToEdit: ITable;
  @Output() tableEdited = new EventEmitter();

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  close() {
    this.modalService.dismissAll();
    this.tableEdited.emit();

  }

}
