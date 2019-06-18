import {Component, OnInit, PipeTransform} from '@angular/core';
import {LowerCasePipe} from '@angular/common';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {IOrder} from '../../../../user/client/my-orders/order.model';
import {MyOrdersService} from '../../../../user/client/my-orders/my-orders.service';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  providers: [LowerCasePipe]
})
export class ManageOrdersComponent implements OnInit {

  orders$: Observable<IOrder[]>;
  filter = new FormControl('');
  orders: IOrder[] = [];

  constructor(pipe: LowerCasePipe, private ordersService: MyOrdersService) {
    this.orders$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.ordersService.getMyOrders().subscribe((data) => {
      this.orders = <IOrder[]> data['data'];
    });
  }

  search(text: string, pipe: PipeTransform): IOrder[] {
    return this.orders.filter(country => {
      const term = text.toLowerCase();
      return country.client_fullname.toLowerCase().includes(term)
        || pipe.transform(country.order_time).includes(term)
        || pipe.transform(country.order_status).includes(term);
    });
  }

}
