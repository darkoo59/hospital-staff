import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { BloodReqRoutingModule } from "./blood-req-routing.module";
import { BloodReqComponent } from "./blood-req.component";
import { BloodReqApprovedComponent } from "../../modules/blood-requests/pages/blood-req-approved/blood-req-approved.component";
import { BloodReqDisapprovedComponent } from "../../modules/blood-requests/pages/blood-req-disapproved/blood-req-disapproved.component";
import { BloodReqUncheckedComponent } from "../../modules/blood-requests/pages/blood-req-unchecked/blood-req-unchecked.component";
import { BloodReqUpdateComponent } from "../../modules/blood-requests/pages/blood-req-update/blood-req-update.component";
import { BloodReqService } from "./services/blood-req.service";
import { BloodReqGridComponent } from "./blood-req-grid/blood-req-grid.component";

@NgModule({
  providers: [BloodReqService],
  declarations: [
    BloodReqComponent,
    BloodReqGridComponent,
    BloodReqUncheckedComponent,
    BloodReqApprovedComponent,
    BloodReqDisapprovedComponent,
    BloodReqUpdateComponent
  ],
  imports: [
    CommonModule,
    BloodReqRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgLetModule
  ]
})
export class BloodReqModule { }