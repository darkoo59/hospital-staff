import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from "./manager.component";
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
        loadChildren: () => import('./modules/bb-news/bb-news.module').then(m => m.BBNewsModule)
      },
      {
        path: 'blood-req',
        loadChildren: () => import('./modules/blood-requests/blood-req.module').then(m => m.BloodReqModule)
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
