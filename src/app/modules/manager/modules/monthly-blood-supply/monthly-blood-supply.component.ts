import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { NavRoute } from "../../components/nav/manager-nav.component";
import { UnsubscribedBb } from './model/unsubscribed-bb';
import { MonthlyBloodSupplyService } from './services/monthly-blood-supply.service';

@Component({
  selector: 'app-monthly-blood-supply',
  templateUrl: './monthly-blood-supply.component.html',
  styleUrls: ['./monthly-blood-supply.component.scss']
})
export class MonthlyBloodSupplyComponent implements OnInit, OnDestroy {

  m_FetchData$: Observable<any> = this.m_MonthlySupplyService.fetchSubscriptions('unsubscribed');
  m_Error$: Observable<string | null> = this.m_MonthlySupplyService.m_Error$.pipe(
    tap(error => {
      this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
      this.m_Loading = false
    })
  );

  m_MonthlyBloodSupplies$: Observable<UnsubscribedBb[] | null> = this.m_MonthlySupplyService.m_Data$.pipe(tap(data => {
    if (data) this.m_Loading = false;
  }));

  m_Routes: NavRoute[] = [
    {
      path: 'subscribe',
      title: 'Subscribe now'
    },
    {
      path: 'already-subscribed',
      title: 'Already subscribed'
    }
  ];

  m_ActiveLink: string = this.m_Routes[0].path;
  m_ActiveLink$ = this.m_Router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    tap((route: any) => {
      const arr = route.url.split('/');
      this.m_ActiveLink = arr[arr.length - 1];
      if(this.m_ActiveLink === 'monthly-blood-supply')
        this.m_ActiveLink = 'subscribe';
    })
  );

  m_Loading: boolean = true;

  constructor(private m_Route: ActivatedRoute,
    private m_MonthlySupplyService: MonthlyBloodSupplyService,
    private m_SnackBar: MatSnackBar,
    private m_Router: Router) { }

  ngOnInit() {
    this.m_ActiveLink = this.m_Route.snapshot.firstChild?.url[0].path!;
  }

  ngOnDestroy(){
    this.m_MonthlySupplyService.resetData();
  }

  changeTab(path: string): void {
    this.m_ActiveLink = path
  }

}
