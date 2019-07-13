import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyOrdersComponent} from './client/my-orders/my-orders.component';
import {EditProfileComponent} from './client/edit-profile/edit-profile.component';
import {PayOrderComponent} from './client/pay-order/pay-order.component';

export const userRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'my-profile', component: EditProfileComponent},
  {path: 'pay', component: PayOrderComponent},
];
