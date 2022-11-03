import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { ManagerNavComponent } from "./nav/manager-nav.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { NgLetModule } from 'ng-let';
import { BBNewsComponent } from "./pages/bb-news/bb-news.component";

@NgModule({
  declarations: [
    ManagerComponent, 
    FeedbackComponent,
    BBRegisterComponent,
    ManagerNavComponent,
    BBNewsComponent
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