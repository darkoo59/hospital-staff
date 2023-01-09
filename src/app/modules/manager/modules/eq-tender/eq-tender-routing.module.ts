import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EqTenderComponent } from "./eq-tender.component";
import { AllTendersComponent } from "./pages/all-tenders.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { CreateNewComponent } from "./pages/create-new/create-new.component";
import { TendersComponent } from "./pages/tenders.component";

const routes: Routes = [
  {
    path: '',
    component: EqTenderComponent,
    children: [
      {
        path: 'tenders',
        component: TendersComponent,
        children: [
          {
            path: 'all',
            component: AllTendersComponent
          },
          {
            path: ':id',
            component: ApplicationsComponent
          },
          { path: '**', redirectTo: 'all', pathMatch: 'full' },
        ]
      },
      {
        path: 'create',
        component: CreateNewComponent
      },
      { path: '**', redirectTo: 'tenders', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqTenderRoutingModule { }