import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getUTCDateInMilisecods(addYear = 0, addMonth = 0, addDay = 0, addHour = 0, addMin = 0): number {
    const date = new Date();
    const year = date.getUTCFullYear() + addYear;
    const month = date.getUTCMonth() + addMonth;
    const day = date.getUTCDay() + addDay;
    const hour = date.getUTCHours() + addHour;
    const minutes = date.getUTCMinutes() + addMin;
    const utcDate = Date.UTC(year, month, day, hour, minutes);

    return utcDate;
  }

  getMinutesInMilliseconds(minutes: number): number {
    return minutes * 60000;
  }
}
