import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BBBloodReqComponent } from "./bb-blood-req.component";
import { BBBloodReqEditComponent } from "./pages/bb-blood-req-edit/bb-blood-req-edit.component";
import { BBBloodReqViewComponent } from "./pages/bb-blood-req-view/bb-blood-req-view.component";

const routes: Routes = [
  {
    path: '',
    component: BBBloodReqComponent,
    children: [
      {
        path: '',
        component: BBBloodReqViewComponent
      },
      {
        path: 'manage',
        component: BBBloodReqEditComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BBBloodReqRoutingModule { }
