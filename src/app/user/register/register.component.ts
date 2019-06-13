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
  regErrorMsg: Array;
  alert: Alert;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register(formValues) {
    this.authService.registerUser(formValues).subscribe(resp => {
      if (resp.status === 422) {
        this.regError = true;
        this.regErrorMsg = resp.error;
        console.log(resp.error);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    this.router.navigate(['']);
  }

  close(alert: Alert) {
    this.alert.splice(this.alert, 1);
  }
}
