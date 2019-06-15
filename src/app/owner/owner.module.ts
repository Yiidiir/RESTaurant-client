import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ownerRoutes} from './owner.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ownerRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
  ManageRestaurantsComponent,
  ManageRestaurantComponent]
})
export class OwnerModule {
}
