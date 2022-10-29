import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/modules/hospital/services/appointment.service';
import { Appointment } from '../../hospital/model/appointment.model';


@Component({
  selector: 'app-doctor-appointment-display',
  templateUrl: './doctor-appointment-display.component.html',
  styleUrls: ['./doctor-appointment-display.component.css']
})
export class DoctorAppointmentDisplayComponent implements OnInit {

  public appointments: Appointment[] = [];
  
  constructor(private appointmentService: AppointmentService,private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    // trnutno zakucan id doktora na 1
    this.appointmentService.getFutureAppointments(1).subscribe(res => {
      this.appointments = res;
    })

    }

    public deleteAppointment(id: number) {
      this.appointmentService.deleteAppointment(id).subscribe(res=>
        this.appointmentService.getFutureAppointments(1).subscribe(res => {
          this.appointments = res;
          alert("Appointment is deleted!");
          
        }) 
      )
    }

    
      public updateAppointment(id: number) {
        this.router.navigate(['/appointment/' + id + '/update']);  
      }

      checkTime(time: string){
        var sat = time.split(':');
        if(sat[1].length <2){
          time = time+'0'; 
        }
        return time ;
        
        }

}


