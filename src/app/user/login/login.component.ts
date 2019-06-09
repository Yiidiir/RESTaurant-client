import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser('user@email.com', formValues.password);
    this.router.navigate(['']);
  }
  cancel() {
    this.router.navigate(['']);
  }
}
