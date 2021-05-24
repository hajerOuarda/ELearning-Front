import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-list-settings',
  templateUrl: './list-settings.component.html',
  styleUrls: ['./list-settings.component.css'],
})
export class ListSettingsComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    contentHeight: 'auto',
    editable: true,
    events: [
      { title: 'event 1', date: '2021-05-18' },
      { title: 'event 2', date: '2021-05-26' },
      { title: 'event 3', date: '2021-05-30' },
      { title: 'event 4', date: '2021-06-01' },
    ]
  };


  constructor(private readonly fireStore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  add(): void {
    console.log('add clicked');
  }

  handleDateClick(arg) {
    console.log('date click! ' + arg.dateStr);
  }


}
