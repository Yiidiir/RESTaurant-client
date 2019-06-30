import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users/', this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }
}
