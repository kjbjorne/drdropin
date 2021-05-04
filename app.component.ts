import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Clinic, Period } from './clinic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title = 'kodeoppgave';
  clinics: Clinic[] = [];
  sortedClinics: Clinic[] = [];

  constructor(private service: RestService) {
  }

  ngOnInit(): void {
    this.getClinics();    
  }
  getClinics(): void {
    this.service.getClinics()
      .subscribe((data: any) => {
        this.clinics = data;        
      });    
  }
  secondsToHours(p: Period, open: boolean): string {

    let video: boolean = false;

    if (open == false) {
      return "Closed";
    } 

    let roundedFrom, roundedTo, addMinutes;
    let from, to;
    
    Object.entries(p).forEach(
      ([key, value]) => {       

        if (value.from == 0 && value.to == 0) {
          video = true;
        } 

        roundedFrom = Math.floor(value.from / 3600000);

        if (value.from / 3600000 % roundedFrom != 0) {
          addMinutes = (value.from / 3600000) % roundedFrom;
          from = roundedFrom + ':' + (60 * addMinutes);
        } else {
          from = value.from / 3600000;
          from = from + ":00";
        }

        roundedTo = Math.floor(value.to / 3600000);
        if (value.to / 3600000 % roundedTo != 0) {
          addMinutes = (value.to / 3600000) % roundedTo;
          to = roundedTo + ':' + (60 * addMinutes);
        } else {
          to = value.to / 3600000;
          to = to + ":00";
        } 
      });

    if (video) {
      return "Døgnåpent";
    } else {
      return from + '-' + to;
    }      
  }

  getOpeningHours(o: any[]): string [] {

    let mon, tue, wed, thu, fri, sat, sun;    
    let weekdays: any[] = [];

    Object.entries(o).forEach(
      ([key, value]) => {
        if (key == "mon") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          mon = this.secondsToHours(period, open);      
        }
        if (key == "tue") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          tue = this.secondsToHours(period, open);         
        }
        if (key == "wed") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          wed = this.secondsToHours(period, open);          
        }
        if (key == "thu") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          thu = this.secondsToHours(period, open);           
        }
        if (key == "fri") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          fri = this.secondsToHours(period, open);         
        }
        if (key == "sat") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          sat = this.secondsToHours(period, open);           
        }
        if (key == "sun") {
          const open: boolean = value.isOpen;
          const period: Period = value.periods;
          sun = this.secondsToHours(period, open);                      
        }         
      }       
    );

    let daysChronologycally = [mon, tue, wed, thu, fri, sat, sun];
    let days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

    let fromday = '';
    let today = ''; 
    for (let i = 0; i < daysChronologycally.length; i++) {
      if (fromday == '') {
        fromday = days[i];
      } 
      
      if (daysChronologycally[i] == daysChronologycally[i + 1]) { 
        today = ' - ' + days[i + 1];
        if (i == daysChronologycally.length - 1) {
          weekdays.push(fromday + today + ': ' + daysChronologycally[i]);
        }
      } else {
        weekdays.push(fromday + today + ': ' + daysChronologycally[i]); 
        fromday = '';
        today = '';
      }
    }

    return weekdays;
  }
}
