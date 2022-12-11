import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InpatientTreatment } from '../model/inpatient-treatment.model';
import { InpatientTreatmentService } from '../services/inpatient-treatment.service';

@Component({
  selector: 'app-inpatient-treatments',
  templateUrl: './inpatient-treatments.component.html',
  styleUrls: ['./inpatient-treatments.component.css']
})
export class InpatientTreatmentsComponent implements OnInit {

  public dataSource = new MatTableDataSource<InpatientTreatment>();
  public displayedColumns = ['patient', 'reasonForAdmission', 'room', 'bed', 'dateOfAdmission'];
  public inpatientTreatments: InpatientTreatment[] = [];

  constructor(private inpatientTreatmentService: InpatientTreatmentService) { }

  ngOnInit(): void {
    this.inpatientTreatmentService.getInpatientTreatments().subscribe(res => {
      this.inpatientTreatments = res;
      this.setDateOfAdmission();
      this.dataSource.data = this.inpatientTreatments;
    })
  }


  private setDateOfAdmission() {
    for (var inpatientTreatment of this.inpatientTreatments) {
      inpatientTreatment.dateOfAdmission = new Date(inpatientTreatment.dateOfAdmission);
    }
  }
}
