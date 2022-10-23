import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentService } from 'src/app/modules/hospital/services/appointment.service';
import { Appointment } from '../../hospital/model/appointment.model';


@Component({
  selector: 'app-doctor-appointment-display',
  templateUrl: './doctor-appointment-display.component.html',
  styleUrls: ['./doctor-appointment-display.component.css']
})
export class DoctorAppointmentDisplayComponent implements OnInit {

  public appointments: Appointment[] = [];
  
  constructor(private appoitmentService: AppointmentService) { }
  
  ngOnInit(): void {
    



    }

}

