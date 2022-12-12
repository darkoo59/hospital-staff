import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MonthlyBloodSupplyComponent } from "./monthly-blood-supply.component";
import { AlreadySubscribedComponent } from "./pages/already-subscribed/already-subscribed.component";
import { SubscribeNowComponent } from "./pages/subscribe-now/subscribe-now.component";

const routes: Routes = [
  {
    path: '',
    component: MonthlyBloodSupplyComponent,
    children: [
      {
        path: 'subscribe',
        component: SubscribeNowComponent
      },
      {
        path: 'already-subscribed',
        component: AlreadySubscribedComponent
      },
      { path: '**', redirectTo: 'subscribe', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyBloodSupplyRoutingModule { }
