import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {ListSettingsComponent} from './components/list-settings/list-settings.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [ListSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FullCalendarModule
  ],
  providers: [
    AngularFirestore
  ]
})
export class SettingsModule {
}
