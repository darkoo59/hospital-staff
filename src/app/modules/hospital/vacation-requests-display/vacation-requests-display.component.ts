import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../model/vacation-request';
import { VacationService } from '../services/vacation.service';
import { AppointmentService } from '../services/appointment.service';
@Component({
  selector: 'app-vacation-requests-display',
  templateUrl: './vacation-requests-display.component.html',
  styleUrls: ['./vacation-requests-display.component.css']
})
export class VacationRequestsDisplayComponent implements OnInit {

  public vacationRequests: VacationRequest[] = [];

  constructor(private vacationService: VacationService) { }

  ngOnInit(): void {
    this.vacationService.getDoctorVacationRequests(5).subscribe(res => {
      this.vacationRequests = res;
    }); 
  }

    public deleteVacationRequest(id: number) {
      this.vacationService.deleteVacationRequest(id).subscribe(res=>
        this.vacationService.getDoctorVacationRequests(1).subscribe(res => {
          this.vacationRequests = res;
          alert("Vacation request is deleted!");
        }) 
        )
    }  
 }


