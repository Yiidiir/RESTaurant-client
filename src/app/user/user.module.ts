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


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyOrdersComponent,
    EditProfileComponent
  ]
})
export class UserModule {
}
