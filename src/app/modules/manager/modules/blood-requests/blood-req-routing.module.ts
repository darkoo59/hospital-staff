import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodReqComponent } from "./blood-req.component";
import { BloodReqApprovedComponent } from "./pages/blood-req-approved.component";
import { BloodReqUpdateComponent } from "./pages/blood-req-update.component";
import { BloodReqNewComponent } from "./pages/blood-req-new.component";
import { BloodReqDeclinedComponent } from "./pages/blood-req-declined.component";

const routes: Routes = [
  {
    path: '',
    component: BloodReqComponent,
    children: [
      {
        path: 'new',
        component: BloodReqNewComponent
      },
      {
        path: 'approved',
        component: BloodReqApprovedComponent
      },
      {
        path: 'declined',
        component: BloodReqDeclinedComponent
      },
      {
        path: 'update',
        component: BloodReqUpdateComponent
      },
      { path: '**', redirectTo: 'new', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodReqRoutingModule { }
