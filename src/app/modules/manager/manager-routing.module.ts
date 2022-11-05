import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from "./manager.component";
import { BBNewsComponent } from "./pages/bb-news/bb-news.component";
import { ApprovedNewsComponent } from "./pages/bb-news/pages/approved-news.component";
import { DisapprovedNewsComponent } from "./pages/bb-news/pages/disapproved-news.component";
import { UncheckedNewsComponent } from "./pages/bb-news/pages/unchecked-news.component";
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
      {
        path: 'bb-register',
        component: BBRegisterComponent,
      },
      {
        path: 'bb-news',
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
      },
      { path: '**', redirectTo: 'feedback', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
