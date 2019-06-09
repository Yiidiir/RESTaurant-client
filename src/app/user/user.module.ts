import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {userRoutes} from './user.routes';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule {
}
