import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { EMPTY, exhaustMap, of, Subject, tap } from "rxjs";
import { EqTender } from "../../model/eq-tender.model";
import { EqTenderService } from "../../services/eq-tender.service";
import { LoadingService } from "../../services/loading.service";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {
  @Input() i_Tender: EqTender | null = null;

  constructor(private m_Dialog: MatDialog, 
              private m_EqTenderService: EqTenderService, 
              private m_Router: Router,
              private m_Route: ActivatedRoute,
              private m_SnackBar: MatSnackBar) { }

  isInPast(date: Date | null): boolean {
    if (!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0, 0, 0, 0);
    if (n <= now) return true;
    return false;
  }

  m_ChooseWinner$: Subject<number> = new Subject<number>().pipe(
    exhaustMap((id: number) => {
      return this.openDialog(id).afterClosed().pipe(
        exhaustMap(ret => {
          return ret ? of({}) : EMPTY;
        }),
        tap(_ => {
          this.m_SnackBar.open("Winner has been chosen successfully", 'close', { duration: 4000 })
          this.m_Router.navigate(['..'], { relativeTo: this.m_Route });
        })
      );
    })
  ) as Subject<number>;

  openDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { action: this.m_EqTenderService.chooseWinner(id) }
    });
  }
}