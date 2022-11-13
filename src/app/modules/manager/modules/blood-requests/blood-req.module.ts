import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { BloodReqRoutingModule } from "./blood-req-routing.module";
import { BloodReqComponent } from "./blood-req.component";
import { BloodReqApprovedComponent } from "./pages/blood-req-approved.component";
import { BloodReqUpdateComponent } from "./pages/blood-req-update.component";
import { BloodReqService } from "./services/blood-req.service";
import { BloodReqGridComponent } from "./blood-req-grid/blood-req-grid.component";
import { BloodReqDeclinedComponent } from "./pages/blood-req-declined.component";
import { BloodReqNewComponent } from "./pages/blood-req-new.component";

@NgModule({
  providers: [BloodReqService],
  declarations: [
    BloodReqComponent,
    BloodReqGridComponent,
    BloodReqNewComponent,
    BloodReqApprovedComponent,
    BloodReqDeclinedComponent,
    BloodReqUpdateComponent
  ],
  imports: [
    CommonModule,
    BloodReqRoutingModule,
    MaterialModule,
    NgLetModule
  ]
})
export class BloodReqModule { }