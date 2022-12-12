import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { BBNewsComponent } from "./bb-news.component";
import { NewsGridComponent } from "../../modules/bb-news/news-grid/news-grid.component";
import { BBNewsRoutingModule } from "./bb-news-routing.module";
import { BBNewsService } from "../../modules/bb-news/services/bb-news.service";
import { NewsNewComponent } from "./pages/news-new.component";
import { NewsApprovedComponent } from "./pages/news-approved.component";
import { NewsDeclinedComponent } from "./pages/news-declined.component";
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";

@NgModule({
  providers: [BBNewsService],
  declarations: [
    BBNewsComponent,
    NewsGridComponent,
    NewsNewComponent,
    NewsApprovedComponent,
    NewsDeclinedComponent
  ],
  imports: [
    CommonModule,
    BBNewsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule,
    PageLoaderModule
  ]
})
export class BBNewsModule {}