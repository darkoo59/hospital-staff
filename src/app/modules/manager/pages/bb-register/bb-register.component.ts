import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { catchError, EMPTY } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BloodBankService } from "../../services/blood-bank.service";
import { RegisterDTO } from "../../utility/register.dto";

@Component({
  selector: 'app-bb-register',
  templateUrl: './bb-register.component.html',
  styleUrls: ['./bb-register.component.scss']
})
export class BBRegisterComponent {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];

  constructor(private m_BloodBankService: BloodBankService, private m_SnackBar: MatSnackBar) { }

  onSubmit(): void {
    this.m_Errors.length = 0;
    const dto: RegisterDTO = this.m_Form.getRawValue();
    this.m_Form.updateValueAndValidity();
    if (!this.m_Form.valid) return;

    this.m_BloodBankService.register(dto)
      .pipe(catchError(res => {
        console.log(res);
        const error = res.error;
        if(error && error.message){
          this.m_Errors.push(error.message);
          return EMPTY;
        }
        this.m_Errors.push(error)
        return EMPTY;
      }))
      .subscribe(_ => {
        this.m_SnackBar.open(`Blood bank registered successfully`, 'close', { duration: 4000 });
        this.m_Form.reset();
      });
  }

  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'appName': new UntypedFormControl(null, [Validators.required]),
      'email': new UntypedFormControl(null, [Validators.required, Validators.email]),
      'server': new UntypedFormControl(null, [Validators.required])
    });
  }
}