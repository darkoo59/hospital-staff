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
        loadChildren: () => import('./pages/bb-news/bb-news.module').then(m => m.BBNewsModule)
      },
      {
        path: 'bb-blood-req',
        loadChildren: () => import('./pages/bb-blood-req/bb-blood-req.module').then(m => m.BBBloodReqModule)
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
