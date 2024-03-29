import {Component, Input, OnInit} from '@angular/core';
import {WorkTimeType} from 'work-time';
import {IRestaurant} from '../../../../user/client/restaurant/restaurant.model';
import {WorkHoursService} from '../../../services/work-hours.service';

@Component({
  selector: 'app-manage-work-hours',
  templateUrl: './manage-work-hours.component.html',
  styleUrls: ['./manage-work-hours.component.css']
})
export class ManageWorkHoursComponent implements OnInit {
  @Input() restaurant: IRestaurant;

  days = [
    {name: 'sunday', id: 1},
    {name: 'monday', id: 2},
    {name: 'tuesday', id: 3},
    {name: 'wednesday', id: 4},
    {name: 'thursday', id: 5},
    {name: 'friday', id: 6},
    {name: 'saturday', id: 7},
  ];
  public workTimeFrontend = [];
  public workTimeType = WorkTimeType.REGULAR;
  public readOnly = false;
  public workTimeBackend: any = {};
  exceptionDate = null;
  exceptionHours = '';

  /*  public workTimeBackend = {
    monday: ['09:00-12:00', '13:00-18:00'],
    tuesday: ['09:00-12:00', '13:00-18:00'],
    wednesday: ['09:00-12:00'],
    thursday: ['09:00-12:00', '13:00-18:00'],
    friday: ['09:00-12:00', '13:00-20:00'],
    saturday: ['09:00-12:00', '13:00-16:00'],
    sunday: [],
    exceptions: {'2016-11-11': ['09:00-12:00'], '2016-12-25': [], '01-01': [], '12-25': ['09:00-12:00']}
  };*/

  /*Front-end format
  *
  * */

  constructor(private workHoursService: WorkHoursService) {
  }

  ngOnInit() {
    this.workTimeBackend = JSON.parse(this.restaurant.work_schedule);
    this.getWorkDaysHours();
  }

  getWorkDaysHours() {
    const workDaysHours = [];
    Object.keys(this.workTimeBackend).forEach((key, index) => {
      if (key !== 'exceptions') {
        this.DayHours(key).forEach((timeRange) => {
          const startTime = timeRange.toString().split('-')[0];
          const endTime = timeRange.toString().split('-')[1];
          workDaysHours.push({
            id: '', type: 'REGULAR', weekday: this.DayNameTodayNumber(key), startTime,
            endTime
          });
        });
      }
    });
    this.workTimeFrontend = workDaysHours;
  }

  dayNumberToDayName(dayNumber) {
    return this.days.find(day => {
      return day.id === +dayNumber;
    }).name;
  }

  DayNameTodayNumber(dayName) {
    return this.days.find(day => {
      return day.name === dayName;
    }).id;
  }

  DayNameTodayObject(dayName) {
    return this.days.find(day => {
      return day.name === dayName;
    });
  }

  DayHours(dayName) {
    return this.workTimeBackend[dayName];
  }

  getExceptionsWorkDays() {
    return Object.keys(this.workTimeBackend.exceptions);
    /*.forEach((workException) => {
      console.log(workException);
      console.log(this.workTimeBackend.exceptions[workException]);
    });*/
    // console.log(this.workTimeBackend.exceptions);
  }

  getExceptionsWorkHours(day) {
    if (this.workTimeBackend.exceptions[day].length < 1 || this.workTimeBackend.exceptions[day][0] === null) {
      return ['All Day'];
    }
    return this.workTimeBackend.exceptions[day];
  }

  checkDateStringType(dateString) {
    if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/gm.test(dateString)) {
      return 'One Time';
    } else if (/[0-9]{2}-[0-9]{2}/gm.test(dateString)) {
      return 'Anually';
    }
    return null;
  }

  addException() {
    const dateString = this.exceptionDate;
    if (!/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/gm.test(dateString)
      &&
      !(/[0-9]{1,2}-[0-9]{1,2}/gm.test(dateString))) {
      alert('Incorrect Date Format!');
      return false;
    } else {
      const workTimes = this.exceptionHours.toString().split(',');
      workTimes.forEach(workTime => {
        if (!/[0-9]{1,2}:[0-9]{1,2}/gm.test(workTime) && workTime !== '') {
          alert('Wrong Hour Format!');
          return false;
        }
        this.workTimeBackend.exceptions[this.exceptionDate] = workTimes;
      });
      this.workHoursService.pushWorkHours(this.workTimeBackend, this.restaurant.id).subscribe(result => {
        this.exceptionDate = '';
        this.exceptionHours = '';
        alert('Updated Work hours for ' + result['name']);
      });
    }
  }

  updateWorkTimes() {
    const backEndFormat = {};
    const weekDays = [1, 2, 3, 4, 5, 6, 7];
    weekDays.forEach((day => {
      const workHoursO = this.workTimeFrontend.filter(workt => {
        return +day === +workt.weekday;
      });
      backEndFormat[this.dayNumberToDayName(day)] = this.getTimesArray(workHoursO);
    }));
    backEndFormat['exceptions'] = this.workTimeBackend.exceptions;
    console.log(backEndFormat);
    console.log(this.workTimeBackend);
    this.workHoursService.pushWorkHours(backEndFormat, this.restaurant.id).subscribe(result => {
      alert('Updated Work hours for ' + result['name']);
    });
  }

  getTimesArray(frontEndObjects) {
    const arr = [];
    frontEndObjects.forEach((fEO) => {
      arr.push(fEO.startTime + '-' + fEO.endTime);
    });
    return arr;
  }

}
