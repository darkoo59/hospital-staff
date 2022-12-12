import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyBloodSupplyComponent } from './monthly-blood-supply.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { NgLetModule } from 'ng-let';
import { PageLoaderModule } from '../../components/page-loader/page-loader.module';
import { MonthlyBloodSupplyRoutingModule } from './monthly-blood-supply-routing.module';
import { SubscribeNowComponent } from './pages/subscribe-now/subscribe-now.component';
import { AlreadySubscribedComponent } from './pages/already-subscribed/already-subscribed.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule,
    PageLoaderModule,
    MonthlyBloodSupplyRoutingModule,
  ],
  declarations: [MonthlyBloodSupplyComponent, SubscribeNowComponent, AlreadySubscribedComponent]
})
export class MonthlyBloodSupplyModule { }
