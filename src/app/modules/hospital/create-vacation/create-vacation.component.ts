import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../model/vacation-request';
import { VacationService } from '../services/vacation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vacation',
  templateUrl: './create-vacation.component.html',
  styleUrls: ['./create-vacation.component.css']
})
export class CreateVacationComponent implements OnInit {


  minDate = new Date();

  vacationRequest : VacationRequest = new VacationRequest();

  constructor(private vacationService: VacationService,private router: Router) { }

  public createVacationRequest(vacationRequest : VacationRequest)
  {
    this.vacationService.createVacationRequest(this.vacationRequest).subscribe(res => {
      this.vacationRequest = res;
    });
  }

  ngOnInit(): void {
    this.vacationRequest.doctorId = 4;
    
  }
}
