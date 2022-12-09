import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject, exhaustMap, tap, Observable, catchError, EMPTY } from "rxjs";

@Component({
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  constructor(private m_DialogRef: MatDialogRef<ConfirmDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) private data: { action: Observable<any> },
              private m_SnackBar: MatSnackBar) { }

  m_Confirm$: Subject<any> = new Subject<any>().pipe(
    exhaustMap((_: any) => {
      return this.data.action.pipe(
        tap(_ => this.m_DialogRef.close(true)),
        catchError(err => {
          this.m_SnackBar.open(err, 'close', { duration: 4000 })
          return EMPTY;
        })
      );
    })
  ) as Subject<any>;
}