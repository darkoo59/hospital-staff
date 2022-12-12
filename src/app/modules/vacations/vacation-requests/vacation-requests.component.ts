import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../../hospital/model/vacation-request';
import { VacationService } from '../../hospital/services/vacation.service';

@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css']
})
export class VacationRequestsComponent implements OnInit {

  vacationRequests: VacationRequest[] = []
  displayedColumns = ['startDate', 'endDate', 'urgency', 'reason', 'buttons'];

  constructor(private vacationService: VacationService) { }

  ngOnInit(): void {
    this.vacationService.getAllNotApprovedVacationRequests().subscribe(res => {
      this.vacationRequests = res;
    }); 
  }

  approveRequest(requestId: number): void{
    this.vacationService.approveVacationRequest(requestId).subscribe(res => {
      alert("Odobren");
    });
  }
  declineRequest(requestId: number): void{
    this.vacationService.declineVacationRequest(requestId).subscribe(res => {
      alert("Odbijen");
    });
  }

}
