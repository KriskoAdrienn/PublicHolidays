import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTitleFormatter,
  CalendarView,
} from 'angular-calendar';
import { appColors } from '../utils/app-colors';


@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})

export class CalendarComponent {
  json:any = JSON;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      title: 'An event',
      start: new Date(),
      color: appColors.red
    },
    {
      title: 'An other event',
      start: new Date(2024,6,20),
      color: appColors.red
    }
  ];
}
