import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ownerRoutes} from './owner.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ownerRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
  ManageRestaurantsComponent]
})
export class OwnerModule {
}
