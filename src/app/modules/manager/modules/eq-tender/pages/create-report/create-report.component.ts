import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Subject, switchMap } from "rxjs";
import { EqTenderService } from "../../services/eq-tender.service";

@Component({
  templateUrl: './create-report.component.html'
})
export class CreateReportComponent {
  m_Form: UntypedFormGroup = new UntypedFormGroup({
    
  });

  onSubmit(): void {
    this.m_Create$.next(0);
  }

  m_Create$: Subject<any> = new Subject().pipe(
    switchMap(_ => this.m_EqTenderService.generateReport())
  ) as Subject<any>;

  constructor(private m_EqTenderService: EqTenderService){}
}