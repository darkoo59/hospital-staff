import { Component, Inject } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EMPTY, exhaustMap, Subject, tap } from "rxjs";
import { BloodReqService } from "../../services/blood-req.service";

@Component({
  templateUrl: './update-dialog.component.html'
})
export class UpdateDialogComponent {
  constructor(private m_DialogRef: MatDialogRef<UpdateDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) private data: { id: number },
              private m_BloodReqService: BloodReqService) { }

  m_Form: UntypedFormGroup = new UntypedFormGroup({
    'reason': new UntypedFormControl(null, [Validators.required])
  });

  m_Submit$: Subject<any> = new Subject<any>().pipe(
    exhaustMap((_: any) => {
      if (!this.m_Form.valid) return EMPTY;
      return this.m_BloodReqService.requestAdjustment(this.data.id, this.m_Form.getRawValue()['reason']).pipe(
        tap(_ => {
          this.m_DialogRef.close(true);
        })
      );
    })
  ) as Subject<any>;
}