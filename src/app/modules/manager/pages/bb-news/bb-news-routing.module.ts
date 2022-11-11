import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BBNewsComponent } from "./bb-news.component";
import { ApprovedNewsComponent } from "./pages/approved-news/approved-news.component";
import { DisapprovedNewsComponent } from "./pages/disapproved-news/disapproved-news.component";
import { UncheckedNewsComponent } from "./pages/unchecked-news/unchecked-news.component";

const routes: Routes = [
  {
    path: '',
    component: BBNewsComponent,
    children: [
      {
        path: 'unchecked',
        component: UncheckedNewsComponent
      },
      {
        path: 'approved',
        component: ApprovedNewsComponent
      },
      {
        path: 'disapproved',
        component: DisapprovedNewsComponent
      },
      { path: '**', redirectTo: 'unchecked', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BBNewsRoutingModule { }
