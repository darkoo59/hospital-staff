import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BBNewsComponent } from "./bb-news.component";
import { NewsApprovedComponent } from "./pages/news-approved.component";
import { NewsDeclinedComponent } from "./pages/news-declined.component";
import { NewsNewComponent } from "./pages/news-new.component";

const routes: Routes = [
  {
    path: '',
    component: BBNewsComponent,
    children: [
      {
        path: 'new',
        component: NewsNewComponent
      },
      {
        path: 'approved',
        component: NewsApprovedComponent
      },
      {
        path: 'declined',
        component: NewsDeclinedComponent
      },
      { path: '**', redirectTo: 'new', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BBNewsRoutingModule { }
