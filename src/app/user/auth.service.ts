import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor() {
  }

  loginUser(email: string, password: string) {
    this.currentUser = {
      id: 1,
      username: 'Yidir',
      firstname: 'Yidir',
      lastname: 'BOUHADJER',
      email
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(email: string, lastname: string) {
    this.currentUser.lastname = lastname;
    this.currentUser.email = email;
  }

  logOut() {
    this.currentUser = null;
  }
}
