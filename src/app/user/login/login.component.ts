import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Alert} from 'selenium-webdriver';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  loginInvalid = false;
  alert: Alert;
  errors: string[] = [];
  mastererror: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.email, formValues.password).subscribe(resp => {
      if (!resp.ok) {
        this.errors = [];
        this.mastererror = [];
        console.log(resp.error.message);
        const errorsx = JSON.parse(JSON.stringify(resp.error.errors));
        this.mastererror = resp.error.message;
        for (let err in errorsx) {
          this.errors.push(err + ': ' + resp.error.errors[err][0]);
        }
        this.loginInvalid = true;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
