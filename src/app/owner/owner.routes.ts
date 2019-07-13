import {ManageRestaurantsComponent} from './manage-restaurants/manage-restaurants.component';
import {ManageRestaurantComponent} from './manage-restaurant/manage-restaurant.component';

export const ownerRoutes = [
  {path: 'manage-restaurants', component: ManageRestaurantsComponent},
  {path: 'manage-restaurants/:id', component: ManageRestaurantComponent},
];
