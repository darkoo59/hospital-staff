import { Component, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, tap } from "rxjs";
import { EqTenderService } from "../services/eq-tender.service";

@Component({
  template: `
  <div *ngLet="{data: m_FetchData$ | async, error: m_Error$ | async} as vm">
    <tender-list *ngIf="!m_Loading"></tender-list>
    <page-loader *ngIf="m_Loading"></page-loader>
  </div>
  `
})
export class AllTendersComponent implements OnDestroy { 
  m_Loading: boolean = true;
  m_FetchData$: Observable<any> = this.m_EqTenderService.fetchTenders().pipe(tap(_ => this.m_Loading = false));

  m_Error$: Observable<string | null> = this.m_EqTenderService.m_Error$.pipe(
    tap(error => {
      if(error) this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
    })
  );

  constructor(private m_EqTenderService: EqTenderService, private m_SnackBar: MatSnackBar){}

  ngOnDestroy(): void {
    this.m_EqTenderService.resetData();
  }
}