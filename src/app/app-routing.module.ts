import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
