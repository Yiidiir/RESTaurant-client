import { Injectable } from '@angular/core';
import {IOrder} from '../../user/client/my-orders/order.model';
import {tap} from 'rxjs/operators';
import {ITable} from '../manage-restaurant/table.model';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  addTable(newTable: ITable) {

    return this.http.post('/api/tables/', newTable, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }
}
