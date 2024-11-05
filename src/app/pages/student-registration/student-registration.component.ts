import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {

  classes: Array<any> = [
    { classTimings: '9:00 - 11:00', "Sat": false, "Sun": false, "Mon": false, "Tue": false, "Wed": false, "Thu": false, "Fri": false },
    { classTimings: '11:20 - 01:20', "Sat": false, "Sun": false, "Mon": false, "Tue": false, "Wed": false, "Thu": false, "Fri": false },
    { classTimings: '2:10 - 4:10', "Sat": false, "Sun": false, "Mon": false, "Tue": false, "Wed": false, "Thu": false, "Fri": false },
    { classTimings: '4:30 - 6:30', "Sat": false, "Sun": false, "Mon": false, "Tue": false, "Wed": false, "Thu": false, "Fri": false },
  ]

  dataset = [
    [
      { subject: '', state: false, day: 'saturday', time: '9:00 - 11:00' },
      { subject: '', state: false, day: 'sunday', time: '9:00 - 11:00' },
      { subject: '', state: false, day: 'Monday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Tuesday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Wednessday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Thursday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Friday', time: '9:30 - 11:30' }
    ],
    [
      { subject: '', state: false, day: 'saturday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'sunday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'Monday', time: '11:45 - 01:45' },
      { subject: '', state: false, day: 'Tuesday', time: '11:45 - 01:45' },
      { subject: '', state: false, day: 'Wednessday', time: '11:45 - 01:45' },
      { subject: '', state: false, day: 'Thursday', time: '11:45 - 01:45' },
      { subject: '', state: false, day: 'Friday', time: '11:45 - 01:45' }
    ],
    [
      { subject: '', state: false, day: 'saturday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'sunday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'Monday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Tuesday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Wednessday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Thursday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Friday', time: '9:30 - 11:30' }
    ],
    [
      { subject: '', state: false, day: 'saturday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'sunday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'Monday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Tuesday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Wednessday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Thursday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Friday', time: '9:30 - 11:30' }
    ],
    [
      { subject: '', state: false, day: 'saturday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'sunday', time: '11:20 - 01:20' },
      { subject: '', state: false, day: 'Monday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Tuesday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Wednessday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Thursday', time: '9:30 - 11:30' },
      { subject: '', state: false, day: 'Friday', time: '9:30 - 11:30' }
    ],
  ]

  setSubject(sub: string): void {
    this.dataset.forEach((row) => {
      row.forEach((timeslot) => {
        if (timeslot.state && timeslot.subject == '') {
          timeslot.subject = sub;
        }
      });
    })


    let timetable: Array<any> = [];
    this.dataset.forEach(row => {
      const assignedPeriod = row.filter(period => period.subject !== '');
      if (assignedPeriod.length > 0) {
        timetable = [...timetable, ...assignedPeriod];
      }
    });

    console.log(timetable);

  }


}
