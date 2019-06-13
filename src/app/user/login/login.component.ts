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
  loginInvalid;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.email, formValues.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
        alert('OOPS!!');
      } else {
        this.router.navigate(['']);
      }
    });
  }
  cancel() {
    this.router.navigate(['']);
  }
}
