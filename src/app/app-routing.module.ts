import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { DoctorAppointmentDisplayComponent } from "./modules/pages/doctor-appointment-display/doctor-appointment-display.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctor-appointment-display', component : DoctorAppointmentDisplayComponent},
  {
    path: 'integration',
    loadChildren: () => import('./integration/integration.module').then(m => m.IntegrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
