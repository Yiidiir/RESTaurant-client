import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RESTaurant-client';

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();

  }
}
