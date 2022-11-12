import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../model/vacation-request';
import { VacationService } from '../services/vacation.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-create-vacation',
  templateUrl: './create-vacation.component.html',
  styleUrls: ['./create-vacation.component.css']
})
export class CreateVacationComponent implements OnInit {


  minDate = new Date();

  fourDaysFromNow = new Date();

  vacationRequest : VacationRequest = new VacationRequest();

  constructor(private vacationService: VacationService,private router: Router) { }

  public createVacationRequest(vacationRequest : VacationRequest)
  {
    if (!this.isReasonInputEmpty()) {
      alert("You must fill in the reason!");
      return;
    };
    if (!this.isStartDateValid()) {
      alert("The first day must be at least 5 days from today!");
      return;
    };
    if(!this.isEndDateValid()){
      alert("The last day must be after the first!");
      return;
    };   
    this.vacationService.createVacationRequest(this.vacationRequest).subscribe(res => {
        this.vacationRequest = res;
        alert("You have successfully created vacation!");
      });
  }

  private isEndDateValid() {
     return this.vacationRequest.endDate > this.vacationRequest.startDate;
  }

  private isStartDateValid() {
    return this.vacationRequest.startDate > this.fourDaysFromNow;
  }

  private isReasonInputEmpty() {
    return this.vacationRequest.reason != "";
  }

  ngOnInit(): void {
    this.vacationRequest.doctorId = 4;
    this.fourDaysFromNow.setDate( this.fourDaysFromNow.getDate() + 4 ); 
    this.vacationRequest.urgency = "NoUrgent"; 
  }
}
