import {Component, OnInit} from '@angular/core';
import {MyOrdersService} from './my-orders.service';
import {IOrder} from './order.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PayOrderComponent} from '../pay-order/pay-order.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders: IOrder[] = [];
  isLoading = true;


  constructor(private orderService: MyOrdersService, private ordersService: MyOrdersService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.orderService.getMyOrders().subscribe((data) => {
      this.myOrders = data['data'];
      this.isLoading = false;
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

  loadOrders() {
    this.isLoading = true;
    this.ordersService.getMyOrders().subscribe((data) => {
      this.myOrders = <IOrder[]> data['data'];
      this.isLoading = false;
    });
  }

  openPayOrder(orderId: number) {
    const payOrderModal = this.modalService.open(PayOrderComponent);
    payOrderModal.componentInstance.orderId = orderId;
    payOrderModal.componentInstance.paid.subscribe(($e) => {
      this.loadOrders();
    });
  }


}
