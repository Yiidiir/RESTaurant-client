import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ownerRoutes} from './owner.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';
import { ManageTablesComponent } from './manage-restaurant/tabs/manage-tables/manage-tables.component';
import { AddTableComponent } from './manage-restaurant/tabs/add-table/add-table.component';
import { EditTableComponent } from './manage-restaurant/tabs/edit-table/edit-table.component';
import { ManageOrdersComponent } from './manage-restaurant/tabs/manage-orders/manage-orders.component';


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
  ManageRestaurantComponent,
  ManageTablesComponent,
  AddTableComponent,
  EditTableComponent,
  ManageOrdersComponent],
  entryComponents: [AddTableComponent, EditTableComponent]
})
export class OwnerModule {
}
