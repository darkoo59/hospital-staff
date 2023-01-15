import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from "./manager.component";
import { UrgentOrderComponent } from "./modules/urgent-order/urgent-order.component";
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { ReportConfigurationComponent } from "./pages/report-configuration/report-configuration.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { AppointmentStatisticsComponent } from "./pages/appointment-statistics/appointment-statistics.component";
import { GenerateReportsComponent } from "./modules/generate-reports/generate-reports.component";

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
      {
        path: 'report-configuration',
        component: ReportConfigurationComponent
      },
      {
        path: 'eq-tender',
        loadChildren: () => import('./modules/eq-tender/eq-tender.module').then(m => m.EqTenderModule)
      },
      {
        path: 'urgent-order',
        component: UrgentOrderComponent
      },
      {
        path: 'monthly-blood-supply',
        loadChildren: () => import('./modules/monthly-blood-supply/monthly-blood-supply.module').then(m => m.MonthlyBloodSupplyModule)
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'appointment-statistics',
        component: AppointmentStatisticsComponent
      },{
        path: 'generate-reports',
        component: GenerateReportsComponent
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
