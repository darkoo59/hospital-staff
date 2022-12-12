import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BloodBankService } from '../../services/blood-bank.service';
import { ConfigurationDTO } from "../../utility/configuration.dto";
import { catchError, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-configuration',
  templateUrl: './report-configuration.component.html',
  styleUrls: ['./report-configuration.component.scss']
})
export class ReportConfigurationComponent implements OnInit {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];
  bBanks: any = []
  bBanksWithConfiguration: any = []
  month: number = 0
  day: number = 0

  constructor(private bbService: BloodBankService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.parseFromString('* * */3 * *')
    this.m_Form.controls['frequencyType'].setValue('day')
    this.m_Form.controls['periodType'].setValue('day')

    this.bbService.getAllBBanks().subscribe((data) => {
      this.bBanks = data
    })
    this.bbService.getBBanksWithConfiguration().subscribe((data) => {
      this.bBanksWithConfiguration = data
    })
    
  }

  onSubmit() {
    let dto: ConfigurationDTO = {
      reportFrequency: this.parseToString(this.m_Form.get('reportFrequency')?.value, this.m_Form.get('frequencyType')?.value),
      reportPeriod: this.m_Form.get('reportPeriod')?.value,
      bloodBankId: this.m_Form.get('bbSelection')?.value
    }
    this.m_Form.updateValueAndValidity();
    if (!this.m_Form.valid) return;

    this.bbService.update(dto)
      .pipe(catchError(res => {
        const error = res.error;
        if(error && error.message){
          this.m_Errors.push(error.message);
          return EMPTY;
        }
        this.m_Errors.push(error)
        return EMPTY;
      }))
      .subscribe(_ => {
        this.snackBar.open(`Successfully updated`, 'close', { duration: 2000 });
        this.m_Form.reset();
      });
  }

  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'reportFrequency': new UntypedFormControl(null, [Validators.required]),
      'reportPeriod': new UntypedFormControl(null, [Validators.required]),
      'bbSelection': new UntypedFormControl(null, [Validators.required]),
      'frequencyType':  new UntypedFormControl(null, [Validators.required]),
      'periodType': new UntypedFormControl(null, [Validators.required])
    });
  }
  bbChanged() {
    const selectedBankId = this.m_Form.getRawValue()['bbSelection'];
    let selectedBank = undefined
    for (let bank of this.bBanksWithConfiguration) {
      if (bank.bloodBankId === selectedBankId) 
        selectedBank = bank
    }
    if (!selectedBank){
      this.m_Form.controls['reportFrequency'].setValue("")
      this.m_Form.controls['reportPeriod'].setValue("")
      return
    }
    this.parseFromString(selectedBank.reportFrequency)
    if (this.day === 0)
      this.m_Form.controls['reportFrequency'].setValue(this.month)
    else 
      this.m_Form.controls['reportFrequency'].setValue(this.day)
    this.m_Form.controls['reportPeriod'].setValue(selectedBank.reportPeriod)
  }

  parseToString(frequency: number, type: string) {
    if (type === 'day') 
      return '0 9 */' + frequency + ' * *'
    return '0 9 1 */' + frequency + ' *'
  }

  parseFromString(string: string) {
    let strings = string.split(' ');
    
    if (strings[2].startsWith('*/'))
      this.day = +strings[2].charAt(2)
    if (strings[3].startsWith('*/'))
      this.month = +strings[2].charAt(2)
  }
}
