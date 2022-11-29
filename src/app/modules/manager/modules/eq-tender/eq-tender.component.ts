import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, Observable, tap } from "rxjs";
import { NavRoute } from "../../components/nav/manager-nav.component";
import { EqTender } from "./model/eq-tender.model";
import { EqTenderService } from "./services/eq-tender.service";

@Component({
  templateUrl: './eq-tender.component.html',
  styleUrls: ['./eq-tender.component.scss']
})
export class EqTenderComponent implements OnInit, OnDestroy  {
  m_FetchData$: Observable<any> = this.m_EqTenderService.fetchTenders();
  m_Error$: Observable<string | null> = this.m_EqTenderService.m_Error$.pipe(
    tap(error => {
      this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
      this.m_Loading = false
    })
  );

  m_EqTenders$: Observable<EqTender[] | null> = this.m_EqTenderService.m_Data$.pipe(tap(data => {
    if(data) this.m_Loading = false;
  }));

  m_Routes: NavRoute[] = [
    {
      path: 'all',
      title: 'All Tenders'
    },
    {
      path: 'create',
      title: 'Create New'
    },
  ];

  m_ActiveLink: string = this.m_Routes[0].path;
  m_ActiveLink$ = this.m_Router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    tap((route: any) => {
      const arr = route.url.split('/');
      this.m_ActiveLink = arr[arr.length - 1];
      if(this.m_ActiveLink === 'eq-tender')
        this.m_ActiveLink = 'all';
    })
  );
  m_Loading: boolean = true;

  constructor(private m_Route: ActivatedRoute, 
              private m_EqTenderService: EqTenderService, 
              private m_SnackBar: MatSnackBar, 
              private m_Router: Router) { }

  ngOnInit() {
    this.m_ActiveLink = this.m_Route.snapshot.firstChild?.url[0].path!;
  }

  ngOnDestroy(): void {
    this.m_EqTenderService.resetData();
  }

  changeTab(path: string): void {
    this.m_ActiveLink = path
  }
}