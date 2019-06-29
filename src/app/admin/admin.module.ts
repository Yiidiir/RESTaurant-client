import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  declarations: [ManageUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),

  ]
})
export class AdminModule {
}
