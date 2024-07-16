import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HolidayModel } from './holiday.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  public getHolidays(countryCode: string): Observable<HolidayModel[]> {
    return this.http.get<HolidayModel[]>(`${environment.calendarApiUrl}?api_key=${environment.apiKey}&country=${countryCode}&year=2020&month=12`);
  }
}
