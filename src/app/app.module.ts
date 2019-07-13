import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IndexComponent} from './pages/index/index.component';
import {HeaderComponent} from './pages/common/header/header.component';
import {FooterComponent} from './pages/common/footer/footer.component';
import {AuthService} from './user/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { NewOrderFormComponent } from './pages/common/new-order-form/new-order-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    NewOrderFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
