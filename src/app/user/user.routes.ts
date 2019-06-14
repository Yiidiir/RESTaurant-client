import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyOrdersComponent} from './client/my-orders/my-orders.component';

export const userRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-orders', component: MyOrdersComponent}
];
