import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { NgLetModule } from 'ng-let';
import { ManagerNavComponent } from "./nav/manager-nav.component";
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { BBNewsComponent } from "./pages/bb-news/bb-news.component";
import { GridComponent } from "./pages/bb-news/news-grid/news-grid.component";
import { UncheckedNewsComponent } from "./pages/bb-news/pages/unchecked-news.component";
import { ApprovedNewsComponent } from "./pages/bb-news/pages/approved-news.component";
import { DisapprovedNewsComponent } from "./pages/bb-news/pages/disapproved-news.component";

@NgModule({
  declarations: [
    ManagerComponent, 
    FeedbackComponent,
    BBRegisterComponent,
    ManagerNavComponent,
    BBNewsComponent,
    GridComponent,
    UncheckedNewsComponent,
    ApprovedNewsComponent,
    DisapprovedNewsComponent
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