import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  templateUrl: './update-dialog.component.html'
})
export class UpdateDialogComponent {
  constructor(public m_DialogRef: MatDialogRef<UpdateDialogComponent>) {}

  m_Form: UntypedFormGroup = new UntypedFormGroup({
    'reason': new UntypedFormControl(null, [Validators.required])
  });

  onSubmit(): void {
    if(!this.m_Form.valid) return;

    this.m_DialogRef.close(this.m_Form.getRawValue());
  }
}