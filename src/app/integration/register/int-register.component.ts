import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { catchError, of } from "rxjs";
import { IntegrationAuthService, RegisterDTO } from "../services/integration-auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-int-register',
  templateUrl: './int-register.component.html',
  styleUrls: ['./int-register.component.scss']
})
export class IntRegisterComponent {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];

  constructor(private m_IntegrationAuthService: IntegrationAuthService, private m_SnackBar: MatSnackBar) { }

  onSubmit(): void {
    this.m_Errors.length = 0;
    const dto: RegisterDTO = this.m_Form.getRawValue();
    this.m_Form.updateValueAndValidity();
    if (!this.m_Form.valid) return;

    this.m_IntegrationAuthService.register(dto)
      .pipe(catchError(res => {
        console.log(res);
        const errors = res.error.errors;

        if (!errors) {
          this.m_Errors.push(res.error);
          return of();
        }

        for (let e in errors) {
          this.m_Errors.push(errors[e]);
        }
        return of();
      }))
      .subscribe(_ => {
        this.m_SnackBar.open(`Third-party user registered`, 'close', { duration: 4000 });
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