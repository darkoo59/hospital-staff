import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EqTenderComponent } from "./eq-tender.component";
import { AllEqTendersComponent } from "./pages/all-eq-tenders.component";
import { CreateNewComponent } from "./pages/create-new/create-new.component";

const routes: Routes = [
  {
    path: '',
    component: EqTenderComponent,
    children: [
      {
        path: 'all',
        component: AllEqTendersComponent
      },
      {
        path: 'create',
        component: CreateNewComponent
      },
      { path: '**', redirectTo: 'all', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqTenderRoutingModule { }