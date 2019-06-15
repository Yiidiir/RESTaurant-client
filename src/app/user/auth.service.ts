import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {toJSDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable()
export class AuthService {
  currentUser: IUser;
  endpoint = '/api/';
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  loginUser(email: string, password: string) {
    return this.http.post<IUser>(this.endpoint + 'users/login', {email, password}, this.httpOptions).pipe(tap(data => {
      data = data['data'];
      this.currentUser = <IUser> (data);
      localStorage.setItem('token', data.api_token);
    })).pipe(catchError(
      err => {
        return of(false);
      }
    ));
  }

  registerUser(dataBody) {
    return this.http.post<IUser>(this.endpoint + 'users/register', dataBody, this.httpOptions).pipe(catchError(
      err => {
        return of(err);
      }
    )).pipe(tap(data => {
      data = data['data'];
      this.currentUser = <IUser> (data);
      localStorage.setItem('token', data.api_token);
    }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  isClient() {
    return this.currentUser.role === 1;
  }

  isOwner() {
    return this.currentUser.role === 2;
  }

  isAdmin() {
    return this.currentUser.role === 3;

  }

  getToken() {
    return localStorage.getItem('token') || null;
  }

  logOut() {
    this.currentUser = null;
    localStorage.removeItem('token');
  }

  checkAuthenticationStatus() {
    if (localStorage.getItem('token') === null) {
      this.currentUser = null;
      console.log('No user logged');
    } else {
      const httpOptionsWithBearer = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      this.http.get(this.endpoint + 'users/check_token', httpOptionsWithBearer).pipe(tap(data => {
        // data = data['data'];
        console.log(data);
        if (true) {
          return this.currentUser = <IUser>data;
        }
        /*        console.log('Invalid Token');
                localStorage.removeItem('token');
                this.currentUser = null;*/
      })).subscribe();

    }
  }
}
