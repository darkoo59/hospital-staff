import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BBBloodReqRoutingModule } from "./bb-blood-req-routing.module";
import { BBBloodReqComponent } from "./bb-blood-req.component";

@NgModule({
  declarations: [
    BBBloodReqComponent,
  ],
  imports: [
    CommonModule,
    BBBloodReqRoutingModule
  ]
})
export class BBBloodReqModule {}