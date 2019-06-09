import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  getDropdownText() {
    if (this.auth.isAuthenticated()) {
      return this.auth.currentUser.email;
    }
    return 'Client Area';
  }
  signOut() {
    this.auth.logOut();
  }
}
