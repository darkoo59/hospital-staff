import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExaminationReport } from '../model/examination-report.model';
import { Symptom } from '../model/symptom.model';
import { SymptomService } from '../services/symptom.service';

@Component({
  selector: 'app-create-examination-report',
  templateUrl: './create-examination-report.component.html',
  styleUrls: ['./create-examination-report.component.css']
})
export class CreateExaminationReportComponent implements OnInit {

  public symptoms: Symptom[] = [];
  public examinationReport: ExaminationReport = new ExaminationReport();



  constructor(private symptomService: SymptomService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.symptomService.getSymptoms().subscribe(res => {
      this.symptoms = res;
    })
  }

}
