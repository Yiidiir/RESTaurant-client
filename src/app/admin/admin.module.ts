import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ManageUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule {
}
