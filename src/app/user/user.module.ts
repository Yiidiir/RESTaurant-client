import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {userRoutes} from './user.routes';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule {
}
