import { Component, OnDestroy, OnInit } from "@angular/core";
import { catchError, EMPTY, Observable, Subject, Subscription, switchMap } from "rxjs";
import { CommonModule } from "@angular/common";
import { FormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MonthlyBloodSupplyService } from "../../services/monthly-blood-supply.service";
import { SubscribeBbDTO } from "../../model/subscribe-bb-dto";

@Component({
  selector: 'subscribe-now-component',
  templateUrl: './subscribe-now.html',
  styleUrls: ['./subscribe-now.scss']
})
export class SubscribeNowComponent implements OnDestroy,OnInit {


  m_Errors: string[] = [];

  m_Data$: Observable<any> = new Observable()
  subscribeBbSubscription : Subscription = new Subscription()

  constructor(private m_MonthlySubscribeService: MonthlyBloodSupplyService, private m_Router: Router, private m_SnackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.m_Data$ = this.m_MonthlySubscribeService.fetchSubscriptions('unsubscribed');
  }
  ngOnDestroy(): void {
    this.subscribeBbSubscription.unsubscribe()
  }
  all_blood_types = ['A_PLUS', 'A_MINUS', 'B_PLUS', 'B_MINUS', 'AB_PLUS', 'AB_MINUS', 'O_PLUS', 'O_MINUS'];
  selectedBb = 0;
  form: UntypedFormGroup = new UntypedFormGroup({
    'quantity': new FormControl(null, Validators.required),
    'bloodType': new FormControl(null, Validators.required)
  })



  onSubmit() : void {
    this.m_Errors.length = 0;
    this.form.updateValueAndValidity();
    if (!this.form.valid && this.selectedBb != null && this.selectedBb != 0) return;
    const dto: SubscribeBbDTO = {
      bloodBankId: this.selectedBb,
      quantityInLiters: this.form.get('quantity')?.value,
      bloodType: this.getIntValueForBloodType(this.form.get('bloodType')?.value)
    }
    this.subscribeBbSubscription = this.m_MonthlySubscribeService.subscribeBb(dto)
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
      this.m_SnackBar.open(`Successfully subscribed to monthly blood supply`, 'Close', { duration: 7000 })
      this.m_MonthlySubscribeService.fetchSubscriptions('unsubscribed');
      this.m_Data$ = this.m_MonthlySubscribeService.fetchSubscriptions('unsubscribed');
      this.m_Router.navigate(['/manager/monthly-blood-supply/already-subscribed'])
    });
  }

  getIntValueForBloodType(bloodType: string): number {
    switch(bloodType){
      case 'A_PLUS':
        return 0;
      case 'A_MINUS':
        return 1;
      case 'B_PLUS':
        return 2;
      case 'B_MINUS':
        return 3;
      case 'AB_PLUS':
        return 4;
      case 'AB_MINUS':
        return 5;
      case 'O_PLUS':
        return 6;
      case 'O_MINUS':
        return 7;
    }
    return 0;
  }
}
