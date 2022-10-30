import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { Patient } from '../model/patient.model';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  public appointment: Appointment = new Appointment();
  public patients: Patient[] = [];
  startDate = new Date();
  
  times = [
    {value: '8:00', viewValue: '8:00'},
    {value: '8:30', viewValue: '8:30'},
    {value: '9:00', viewValue: '9:00'},
    {value: '9:30', viewValue: '9:30'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:30', viewValue: '10:30'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:30', viewValue: '11:30'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:30', viewValue: '13:30'},
    {value: '14:00', viewValue: '14:00'},
    {value: '14:30', viewValue: '14:30'},
    {value: '15:00', viewValue: '15:00'},
    {value: '15:30', viewValue: '15:30'},
    {value: '16:00', viewValue: '16:00'},
    {value: '16:30', viewValue: '16:30'},
    {value: '17:00', viewValue: '17:00'}
  ];

  constructor(private patientService: PatientService, private appointmentService: AppointmentService, private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    
      this.appointmentService.getAppointment(params['id']).subscribe(res => {
        this.appointment = res;
        this.appointment.time = this.checkTime(this.appointment.time)
      }) 

    });
 

  }

  public updateAppointment() {
      this.appointmentService.updateAppointment(this.appointment).subscribe(res => {
        if (res.appointmentId === 0){
          alert("Choose another appointment!");
        }
        this.router.navigate(['/appointments']);
      }
      );
       
      
      
   
  }

  checkTime(time: string){
    var sat = time.split(':');
    if(sat[1].length <2){
      time = time+'0'; 
    }
    return time ;
    
    }

  
}