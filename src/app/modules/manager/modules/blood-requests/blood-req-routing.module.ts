import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodReqComponent } from "./blood-req.component";
import { BloodReqApprovedComponent } from "../../modules/blood-requests/pages/blood-req-approved/blood-req-approved.component";
import { BloodReqDisapprovedComponent } from "../../modules/blood-requests/pages/blood-req-disapproved/blood-req-disapproved.component";
import { BloodReqUncheckedComponent } from "../../modules/blood-requests/pages/blood-req-unchecked/blood-req-unchecked.component";
import { BloodReqUpdateComponent } from "../../modules/blood-requests/pages/blood-req-update/blood-req-update.component";

const routes: Routes = [
  {
    path: '',
    component: BloodReqComponent,
    children: [
      {
        path: 'unchecked',
        component: BloodReqUncheckedComponent
      },
      {
        path: 'approved',
        component: BloodReqApprovedComponent
      },
      {
        path: 'disapproved',
        component: BloodReqDisapprovedComponent
      },
      {
        path: 'update',
        component: BloodReqUpdateComponent
      },
      { path: '**', redirectTo: 'unchecked', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodReqRoutingModule { }
