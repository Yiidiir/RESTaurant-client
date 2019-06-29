import {Component, OnInit} from '@angular/core';
import {IUser} from '../../user.model';
import {AuthService} from '../../auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser: IUser;
  password = '';
  passwordConfirmation = '';

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getAuth();
  }

  getAuth() {
    if (localStorage.getItem('token') === null) {
      this.currentUser = null;
      console.log('No user logged');
    } else {

      this.http.get(this.auth.endpoint + 'users/check_token', this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
      })).subscribe((data => {
        return this.currentUser = <IUser> data;
      }));

    }
  }

  getUserRoleText(role: number) {
    if (role == 1) {
      return 'Customer';
    } else if (role == 2) {
      return 'Restaurant Owner';
    }
    return 'System Admin';
  }

  updateProfile(formValues) {
    const newProfile = formValues;
    newProfile.password = this.password;
    newProfile.password_confirmation = this.passwordConfirmation;
    this.auth.updateProfile(newProfile).subscribe(res => {
      this.currentUser = <IUser> res;
      this.auth.checkAuthenticationStatus();
    });
  }


}
