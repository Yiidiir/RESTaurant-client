import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../user/auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkHoursService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  pushWorkHours(workHours, restaurantId) {
    return this.http.post('/api/restaurants/' + restaurantId +
      '/opening-hours', {work_hours: workHours}, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }

  isOpen(date, hour, restaurantId) {
    return this.http.get('/api/restaurants/' + restaurantId +
      '/status/' + date + '/' + hour, this.auth.getHttpHeadersWithToken()).pipe(tap(data => {
    }));
  }
}
