import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { BBNewsComponent } from "./bb-news.component";
import { NewsGridComponent } from "./news-grid/news-grid.component";
import { ApprovedNewsComponent } from "./pages/approved-news/approved-news.component";
import { DisapprovedNewsComponent } from "./pages/disapproved-news/disapproved-news.component";
import { UncheckedNewsComponent } from "./pages/unchecked-news/unchecked-news.component";
import { BBNewsRoutingModule } from "./bb-news-routing.module";

@NgModule({
  declarations: [
    BBNewsComponent,
    NewsGridComponent,
    UncheckedNewsComponent,
    ApprovedNewsComponent,
    DisapprovedNewsComponent
  ],
  imports: [
    CommonModule,
    BBNewsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule
  ]
})
export class BBNewsModule {}