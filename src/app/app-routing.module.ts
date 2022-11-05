import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { HospitalMapComponent } from './hospital-map/hospital-map.component';
import { HospitalFloorComponent } from './hospital-floor/hospital-floor.component';
import { RoomsMapComponent } from "./rooms-map/rooms-map.component";
import { DoctorAppointmentDisplayComponent } from "./modules/pages/doctor-appointment-display/doctor-appointment-display.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctor-appointment-display', component : DoctorAppointmentDisplayComponent},
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)
  },
  { path: 'hospitalMap', component: HospitalMapComponent },
  { path: 'hospitalMap/hospital/:id', component: HospitalFloorComponent },
  { path: 'hospitalMap/hospital/:id/floor/:floorId', component: RoomsMapComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
