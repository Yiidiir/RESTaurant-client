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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
