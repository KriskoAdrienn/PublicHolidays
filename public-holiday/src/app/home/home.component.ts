import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { countries, ICountry, TCountryCode } from 'countries-list'
import { CalendarService } from '../calendar/calendar.service';
import { HolidayModel } from '../calendar/holiday.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  countriesList: [string, ICountry][] = Object.entries(countries);
  formControl: FormControl = new FormControl();
  constructor(private calendarService: CalendarService) {

  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((option: any) => {
      this.calendarService.getHolidays(option).subscribe((response: HolidayModel[]) => {
        console.log(response);
      });

    });
  }
}
