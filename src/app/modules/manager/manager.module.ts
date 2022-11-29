import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { NgLetModule } from 'ng-let';
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { BloodBankService } from "./services/blood-bank.service";
import { ManagerService } from "./services/manager.service";
import { ManagerNavComponent } from "./components/nav/manager-nav.component";

@NgModule({
  providers:[BloodBankService, ManagerService],
  declarations: [
    ManagerComponent, 
    FeedbackComponent,
    BBRegisterComponent,
    ManagerNavComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule
  ]
})
export class ManagerModule { }