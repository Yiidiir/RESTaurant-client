import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {userRoutes} from './user.routes';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { MyOrdersComponent } from './client/my-orders/my-orders.component';
import { EditProfileComponent } from './client/edit-profile/edit-profile.component';
import { PayOrderComponent } from './client/pay-order/pay-order.component';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxStripeModule.forRoot('pk_test_b9B7nRWbnMNnZW6ig0ubbb4Z00J8pSalsu'),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyOrdersComponent,
    EditProfileComponent,
    PayOrderComponent
  ]
})
export class UserModule {
}
