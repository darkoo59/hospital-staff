import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { BBNewsComponent } from "./bb-news.component";
import { NewsGridComponent } from "../../modules/bb-news/news-grid/news-grid.component";
import { ApprovedNewsComponent } from "../../modules/bb-news/pages/approved-news/approved-news.component";
import { DisapprovedNewsComponent } from "../../modules/bb-news/pages/disapproved-news/disapproved-news.component";
import { UncheckedNewsComponent } from "../../modules/bb-news/pages/unchecked-news/unchecked-news.component";
import { BBNewsRoutingModule } from "./bb-news-routing.module";
import { BBNewsService } from "../../modules/bb-news/services/bb-news.service";

@NgModule({
  providers: [BBNewsService],
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