import {Routes} from '@angular/router';
import {IndexComponent} from './app/pages/index/index.component';

export const appRoutes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'owner', loadChildren: './owner/owner.module#OwnerModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];
