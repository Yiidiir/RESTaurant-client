import {Component, Input, OnInit, PipeTransform} from '@angular/core';
import {LowerCasePipe} from '@angular/common';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {IOrder} from '../../../../user/client/my-orders/order.model';
import {MyOrdersService} from '../../../../user/client/my-orders/my-orders.service';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {PayOrderComponent} from '../../../../user/client/pay-order/pay-order.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderDetailsComponent} from '../order-details/order-details.component';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  providers: [LowerCasePipe]
})
export class ManageOrdersComponent implements OnInit {

  orders$: Observable<IOrder[]>;
  filter = new FormControl('');
  orders: IOrder[] = [];
  isLoading = true;
  @Input() restaurant: IRestaurant;


  constructor(pipe: LowerCasePipe, private ordersService: MyOrdersService, private modalService: NgbModal) {
    this.orders$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  search(text: string, pipe: PipeTransform): IOrder[] {
    return this.orders.filter(order => {
      const term = text.toLowerCase();
      return order.client_fullname.toLowerCase().includes(term)
        || pipe.transform(order.order_time).includes(term)
        || pipe.transform(order.order_status).includes(term)
        || order.price.toFixed().includes(term)
        || order.id.toFixed().includes(term);
    });
  }

  getBadgeColor(status) {
    if (status === 'Processing') {
      return 'warning';
    } else if (status === 'Completed') {
      return 'success';
    } else if (status === 'Waiting for payment') {
      return 'info';
    } else {
      return 'secondary';
    }
  }

  cancelOrder(orderId) {
    this.ordersService.updateOrderStatus(orderId, 0).subscribe(res => {
      this.loadOrders();
    });
  }

  confirmOrder(orderId) {
    this.ordersService.updateOrderStatus(orderId, 2).subscribe(res => {
      this.loadOrders();
    });
  }

  loadOrders() {
    this.isLoading = true;
    this.ordersService.getMyOrders(this.restaurant.id +'/allOrders').subscribe((data) => {
      this.orders = <IOrder[]> data['data'];
      this.isLoading = false;
    });
  }

  getInfoType(type) {
    if (type === 'Food Delivery') {
      return 'Delivery Details';
    }
    return 'Booking Details';
  }

  openDetails(order: IOrder) {
    const payOrderModal = this.modalService.open(OrderDetailsComponent);
    payOrderModal.componentInstance.orderToInspect = order;
  }



}
