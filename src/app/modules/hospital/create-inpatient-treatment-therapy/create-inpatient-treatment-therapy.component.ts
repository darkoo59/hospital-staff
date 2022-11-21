import { Component, OnInit } from '@angular/core';
import { BloodTherapy } from '../model/blood-therapy.model';
import { Blood } from '../model/blood.model';
import { InpatientTreatmentTherapy } from '../model/inpatient-treatment-therapy.model';
import { InpatientTreatment } from '../model/inpatient-treatment.model';
import { MedicineTherapy } from '../model/medicine-therapy.model';
import { Medicine } from '../model/medicine.model';
import { Patient } from '../model/patient.model';
import { BloodService } from '../services/blood.service';
import { InpatientTreatmentTherapyService } from '../services/inpatient-treatment-therapy.service';
import { InpatientTreatmentService } from '../services/inpatient-treatment.service';
import { MedicineService } from '../services/medicine.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-create-inpatient-treatment-therapy',
  templateUrl: './create-inpatient-treatment-therapy.component.html',
  styleUrls: ['./create-inpatient-treatment-therapy.component.css']
})
export class CreateInpatientTreatmentTherapyComponent implements OnInit {

  public patientId: string = '';
  public inpatientTreatments: InpatientTreatment[] = [];
  public inpatientTreatmentTherapy: InpatientTreatmentTherapy = new InpatientTreatmentTherapy();
  public patients: Patient[] = [];
  public bloods: Blood[] = [];
  public medicines: Medicine[] = [];
  public blood: Blood = new Blood();
  public medicine: Medicine = new Medicine();
  public bloodTherapy: BloodTherapy = new BloodTherapy();
  public medicineTherapy: MedicineTherapy = new MedicineTherapy();
  public medicineId: number = 0;

  constructor(private inpatientTreatmentTherapyService: InpatientTreatmentTherapyService, private medicineService: MedicineService, private inpatientTreatmentService: InpatientTreatmentService, private patientService: PatientService, private bloodService: BloodService) { }

  ngOnInit(): void {
    this.inpatientTreatmentService.getInpatientTreatments().subscribe(res => {
      this.inpatientTreatments = res;
      this.getPatients();
    })

    this.bloodService.getBloods().subscribe(res => {
      this.bloods = res;
    })

    this.medicineService.getMedicines().subscribe(res => {
      this.medicines = res;
    })
  }

  private getPatients() {
    for (var inpatientTreatment of this.inpatientTreatments) {
      this.patientService.getPatient(inpatientTreatment.patientId).subscribe(res => {
        this.patients.push(res);
      });
    }
  }

  public getInpatientTreatmentTherapy() {
    for (var inpatientTreatment of this.inpatientTreatments) {
      if (inpatientTreatment.patientId == Number(this.patientId)) {
        this.inpatientTreatmentTherapyService.getInpatientTreatmentTherapyByInpatientTreatmentId(inpatientTreatment.inpatientTreatmentId).subscribe(res => {
          this.inpatientTreatmentTherapy = res;
        });
      }
    }
  }

  public updateInpatientTreatmentTherapy() {
    if (this.isValid()) {
      if (this.bloodTherapy.start.toString() != '' && this.bloodTherapy.end.toString() != '') {
        this.bloodTherapy.start.setHours(this.bloodTherapy.start.getHours() + 1);
        this.bloodTherapy.end.setHours(this.bloodTherapy.end.getHours() + 1);
      } else if (this.medicineTherapy.start.toString() != '' && this.medicineTherapy.end.toString() != '') {
        this.medicineTherapy.start.setHours(this.medicineTherapy.start.getHours() + 1);
        this.medicineTherapy.end.setHours(this.medicineTherapy.end.getHours() + 1);
      } else {
        this.bloodTherapy.start.setHours(this.bloodTherapy.start.getHours() + 1);
        this.bloodTherapy.end.setHours(this.bloodTherapy.end.getHours() + 1);
        this.medicineTherapy.start.setHours(this.medicineTherapy.start.getHours() + 1);
        this.medicineTherapy.end.setHours(this.medicineTherapy.end.getHours() + 1);
      }
      this.medicineTherapy.medicineId = this.medicineId;
      this.inpatientTreatmentTherapy.bloodTherapies.push(this.bloodTherapy);
      this.inpatientTreatmentTherapy.medicineTherapies.push(this.medicineTherapy);
      this.inpatientTreatmentTherapyService.updateInpatientTreatmentTherapy(this.inpatientTreatmentTherapy).subscribe(res => {
        alert("Request is sent!");
      });
      } else {
        alert("All fields must be filled!");
      }
  }

  private isValid(): boolean {
    return (this.patientId != '' && this.bloodTherapy.bloodType != '' && this.bloodTherapy.quantityInLiters.toString() != '' && this.bloodTherapy.start.toString() != '' && this.bloodTherapy.end.toString() != '') || (this.patientId != '' && this.medicineId.toString() != '' && this.medicineTherapy.dosage != '' && this.medicineTherapy.start.toString() != '' && this.medicineTherapy.end.toString() != '');
  }
}
