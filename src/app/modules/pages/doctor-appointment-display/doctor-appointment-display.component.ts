import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentService } from 'src/app/modules/hospital/services/appointment.service';
import { Appointment } from '../../hospital/model/appointment.model';
import { DatePipe } from '@angular/common'
import { ActivatedRoute, Router, Params } from "@angular/router";


@Component({
  selector: 'app-doctor-appointment-display',
  templateUrl: './doctor-appointment-display.component.html',
  styleUrls: ['./doctor-appointment-display.component.css']
})
export class DoctorAppointmentDisplayComponent implements OnInit {

  public appointments: Appointment[] = [];
  
  constructor(private appoitmentService: AppointmentService,private route: ActivatedRoute,
    private router: Router) { }
  
  public deleteAppointment(id: number) {
    this.appoitmentService.deleteAppointment(id).subscribe(res=>
      this.appoitmentService.getFutureAppointments(1).subscribe(res => {
        this.appointments = res;
        
      }) 
    )
    
    
    
}

public updateAppointment(id: number) {
  this.router.navigate(['/appointment/' + id + '/update']);
  
}


  ngOnInit(): void {
    this.appoitmentService.getFutureAppointments(1).subscribe(res => {
      this.appointments = res;
      
    }) 
  }
}
