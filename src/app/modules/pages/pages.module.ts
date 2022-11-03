import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { DoctorAppointmentDisplayComponent } from './doctor-appointment-display/doctor-appointment-display.component';
import { MaterialModule } from "src/app/material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  { path: 'appointments', component: DoctorAppointmentDisplayComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    DoctorAppointmentDisplayComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
