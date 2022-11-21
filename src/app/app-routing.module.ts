import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { HospitalMapComponent } from './modules/hospital/hospital-map/hospital-map.component';
import { HospitalFloorComponent } from './modules/hospital/hospital-floor/hospital-floor.component';
import { RoomsMapComponent } from "./modules/hospital/rooms-map/rooms-map.component";
import { DoctorAppointmentDisplayComponent } from "./modules/pages/doctor-appointment-display/doctor-appointment-display.component";
import { VacationRequestsDisplayComponent } from "./modules/hospital/vacation-requests-display/vacation-requests-display.component";
import { CreateVacationComponent } from "./modules/hospital/create-vacation/create-vacation.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctor-appointment-display', component : DoctorAppointmentDisplayComponent},
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)
  },
  { path: 'create-vacation-display', component : CreateVacationComponent  },
  { path: 'vacation-requests-display' , component : VacationRequestsDisplayComponent },
  {
    path: 'hospital',
    loadChildren: () => import('./modules/hospital/hospital.module').then(m => m.HospitalModule)
  },
  { path: 'hospitalMap', component: HospitalMapComponent },
  { path: 'hospitalMap/hospital/:id', component: HospitalFloorComponent },
  { path: 'hospitalMap/hospital/:id/floor/:floorId', component: RoomsMapComponent },
  { path: 'hospitalMap/hospital/:id/floor/:floorId/room/:roomId', component: RoomsMapComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
