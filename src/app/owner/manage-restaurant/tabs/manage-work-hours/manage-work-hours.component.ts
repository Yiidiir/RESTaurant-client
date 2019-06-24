import {Component, OnInit} from '@angular/core';
import {WorkTimeType} from 'work-time';

@Component({
  selector: 'app-manage-work-hours',
  templateUrl: './manage-work-hours.component.html',
  styleUrls: ['./manage-work-hours.component.css']
})
export class ManageWorkHoursComponent implements OnInit {
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
  public workTimeBackend = {
    monday: ['09:00-12:00', '13:00-18:00'],
    tuesday: ['09:00-12:00', '13:00-18:00'],
    wednesday: ['09:00-12:00'],
    thursday: ['09:00-12:00', '13:00-18:00'],
    friday: ['09:00-12:00', '13:00-20:00'],
    saturday: ['09:00-12:00', '13:00-16:00'],
    sunday: [],
    exceptions: {'2016-11-11': ['09:00-12:00'], '2016-12-25': [], '01-01': [], '12-25': ['09:00-12:00']}
  };

  constructor() {
  }

  ngOnInit() {
    this.getWorkDaysHours();
    // this.getExceptionsWorkTimes();
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
    if (this.workTimeBackend.exceptions[day].length < 1) {
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

}
