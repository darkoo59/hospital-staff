import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { catchError, EMPTY, Observable, Subject, Subscription, switchMap } from "rxjs";
import { MonthlyBloodSupplyService } from "../../services/monthly-blood-supply.service";
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'already-subscribed-component',
  templateUrl: './already-subscribed.html',
  styleUrls: ['./already-subscribed.scss']
})
export class AlreadySubscribedComponent implements OnDestroy,OnInit {

  m_Errors: string[] = [];

  constructor(private m_MonthlySubscribeService: MonthlyBloodSupplyService, private m_Router: Router, private m_SnackBar: MatSnackBar) {
  }
  m_Data$: Observable<any> = new Observable()
  unsubscribeBbSubscription : Subscription = new Subscription()
  ngOnInit(): void {
    this.m_Data$ = this.m_MonthlySubscribeService.fetchSubscriptions('subscribed');
  }
  ngOnDestroy(): void {
    this.unsubscribeBbSubscription.unsubscribe()
  }

  all_blood_types = ['A_PLUS', 'A_MINUS', 'B_PLUS', 'B_MINUS', 'AB_PLUS', 'AB_MINUS', 'O_PLUS', 'O_MINUS'];

  unsubscribe(bloodBankId:number){
    this.unsubscribeBbSubscription = this.m_MonthlySubscribeService.unsubscribeBb(bloodBankId)
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
      this.m_SnackBar.open(`Successfully unsubscribed from monthly blood supply`, 'Close', { duration: 7000 })
      this.m_MonthlySubscribeService.fetchSubscriptions('subscribed');
      this.m_Data$ = this.m_MonthlySubscribeService.fetchSubscriptions('subscribed');
      this.m_Router.navigate(['/manager/monthly-blood-supply/already-subscribed'])
    });
    this.m_MonthlySubscribeService.fetchSubscriptions("unsubscribed")
  }

  getDateFormat(date:any){
    let splitedDate = date.split('T')
    return splitedDate[0] + ' at ' + splitedDate[1].slice(0,8)
  }
}
