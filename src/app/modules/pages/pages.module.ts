import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { DoctorAppointmentDisplayComponent } from './doctor-appointment-display/doctor-appointment-display.component';

@NgModule({
  declarations: [
    HomeComponent,
    DoctorAppointmentDisplayComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
