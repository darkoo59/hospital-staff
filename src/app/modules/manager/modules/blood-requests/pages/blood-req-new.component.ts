import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Subject, switchMap, Observable, EMPTY } from "rxjs";
import { BloodReqService } from "../services/blood-req.service";
import { UpdateDialogComponent } from "../components/update-dialog/update-dialog.component";

@Component({
  template: `
    <blood-req-grid *ngLet="{data: m_FetchData$ | async, a: m_Approve$ | async, d: m_Decline$ | async, u: m_Update$ | async} as vm"
                    (m_ApproveEvent)="m_Approve$.next($event)"
                    (m_DeclineEvent)="m_Decline$.next($event)"
                    (m_UpdateEvent)="m_Update$.next($event)">
    </blood-req-grid>
  `
})
export class BloodReqNewComponent {
  m_Decline$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BloodReqService.patchBloodRequestState(id, 'decline').pipe(
        switchMap(_ => this.fetchData())
      )
    })
  ) as Subject<number>;

  m_Approve$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BloodReqService.patchBloodRequestState(id, 'approve').pipe(
        switchMap(_ => this.fetchData())
      )
    })
  ) as Subject<number>;

  m_Update$: Subject<any> = new Subject<any>().pipe(
    switchMap((id: number) => {
      return this.openDialog(id).afterClosed().pipe(
        switchMap(ret => {
          return ret ? this.fetchData() : EMPTY;
        })
      );
    })
  ) as Subject<any>;

  m_FetchData$: Observable<any> = this.fetchData();

  constructor(private m_BloodReqService: BloodReqService, public m_Dialog: MatDialog) { }

  fetchData(): Observable<any> {
    return this.m_BloodReqService.fetchBloodRequests('new');
  }

  openDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(UpdateDialogComponent, {
      width: '450px',
      data: { id }
    });
  }
}