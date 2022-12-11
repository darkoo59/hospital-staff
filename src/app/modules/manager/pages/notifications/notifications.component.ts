import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { catchError, EMPTY, Observable, Subscription, tap } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BloodBankService } from "../../services/blood-bank.service";
import { RegisterDTO } from "../../utility/register.dto";
import { NotificationsService } from "../../services/notifications.service";
import { Notifications } from "../../model/notifications.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  m_Errors: string[] = [];

  m_Data$: Observable<any> = this.m_NotificationsService.fetchNotifications();
  m_Error$: Observable<string | null> = this.m_NotificationsService.m_Error$.pipe(
    tap(error => {
      this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
      this.m_Loading = false
    })
  );

  m_Loading: boolean = true;
  unsubscribeSubscription : Subscription = new Subscription()

  m_MonthlyBloodSupplies$: Observable<Notifications[] | null> = this.m_NotificationsService.m_Data$.pipe(tap(data => {
    if (data) this.m_Loading = false;
  }));

  constructor(private m_NotificationsService: NotificationsService, private m_SnackBar: MatSnackBar, private m_Router: Router) { }

  remove(id:number){
    this.unsubscribeSubscription = this.m_NotificationsService.remove(id)
    .pipe(catchError(res => {
      const error = res.error;
      if (error && error.message) {
        this.m_Errors.push(error.message);
        return EMPTY;
      }
      this.m_Errors.push(error);
      return EMPTY;
    }))
    .subscribe(data => {
      this.m_SnackBar.open(`Successfully removed notification!`, 'Close', { duration: 7000 })
      this.m_NotificationsService.fetchNotifications();
      this.m_Data$ = this.m_NotificationsService.fetchNotifications();
      this.m_Router.navigate(['/manager/notifications'])
    });
    this.m_NotificationsService.fetchNotifications()
  }

  ngOnDestroy(): void {
    this.unsubscribeSubscription.unsubscribe()
  }

}
