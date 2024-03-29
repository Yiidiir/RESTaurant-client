import {Component, OnInit, PipeTransform} from '@angular/core';
import {ManageUsersService} from '../manage-users.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {LowerCasePipe} from '@angular/common';
import {map, startWith, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../user/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [LowerCasePipe]

})
export class ManageUsersComponent implements OnInit {

  // noinspection JSAnnotator
  users$: Observable<any[]>;
  filter = new FormControl('');
  users: Array<any>;
  isLoading = true;

  constructor(pipe: LowerCasePipe, private manageUsers: ManageUsersService,
              private http: HttpClient, private  auth: AuthService) {
    this.users$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit() {
    this.loadUsers();
  }

  search(text: string, pipe: PipeTransform): Array<any> {
    return this.users.filter(user => {
      const term = text.toLowerCase();
      return user.first_name.toLowerCase().includes(term)
        || user.last_name.toLowerCase().includes(term)
        || user.email.toLowerCase().includes(term)
        || user.join_date.toLowerCase().includes(term)
        || user.phone_number.toString().includes(term)
        || this.getUserRoleText(user.role).toLowerCase().includes(term);
    });
  }

  loadUsers() {
    this.isLoading = true;
    this.manageUsers.getUsers().subscribe((data) => {
      console.log(data);
      this.users = <any[]>data;
      this.isLoading = false;
    });
  }

  getUserRoleText(role: number) {
    if (role == 1) {
      return 'Customer';
    } else if (role == 2) {
      return 'Restaurant Owner';
    }
    return 'System Admin';
  }

  changeRole(userId) {
    return this.http.get('/api/users/role/' + userId, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    })).subscribe(result => {
      alert('Role for User #' + userId + ' changed!');
      this.loadUsers();
    });
  }


}
