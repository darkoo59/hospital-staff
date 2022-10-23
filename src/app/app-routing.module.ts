import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { HospitalMapComponent } from './hospital-map/hospital-map.component';
import { HospitalFlatsComponent } from './hospital-flats/hospital-flats.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'integration',
    loadChildren: () => import('./integration/integration.module').then(m => m.IntegrationModule)
  },
  { path: 'hospitalMap', component: HospitalMapComponent },
  { path: 'hospitalMap/hospital/:id', component: HospitalFlatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
