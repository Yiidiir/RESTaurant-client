import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email;
  password;
  regError = false;
  regErrorMsg: any;
  alert: Alert;
  errors: any[] = [];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register(formValues) {
    this.authService.registerUser(formValues).subscribe(resp => {
      if (!resp.ok) {
        this.errors = [];
        this.regErrorMsg = '';
        console.log(resp.error.message);
        const errorsx = JSON.parse(JSON.stringify(resp.error.errors));
        this.regErrorMsg = resp.error.message;
        for (let err in errorsx) {
          this.errors.push(resp.error.errors[err][0]);
        }
        this.regError = true;
        console.log(resp.error);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    this.router.navigate(['']);
  }

}
