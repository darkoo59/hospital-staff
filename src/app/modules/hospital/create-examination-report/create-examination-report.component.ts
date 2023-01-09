import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExaminationReport } from '../model/examination-report.model';
import { Symptom } from '../model/symptom.model';
import { SymptomService } from '../services/symptom.service';
import { Medicine } from '../model/medicine.model';
import { MedicineService } from '../services/medicine.service';
import { Recipe } from '../model/recipe.model';
import { ExaminationReportService } from '../services/examination-report.service';
import { PhysicianScheduleService } from '../services/physician-schedule.service';
import { Appointment } from '../model/appointment.model';
import { PhysicianSchedule } from '../model/physician-schedule.model';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-create-examination-report',
  templateUrl: './create-examination-report.component.html',
  styleUrls: ['./create-examination-report.component.css']
})
export class CreateExaminationReportComponent implements OnInit {

  public symptoms: Symptom[] = [];
  public selectedSymptoms: Symptom[] = [];
  public selectedSymptomIds = new FormControl('');
  public medicines: Medicine[] = [];
  public selectedMedicines: Medicine[] = [];
  public medicineIds: number[] = [];
  public appointments: Appointment[] = [];
  public selectedMedicinesIds = new FormControl('');
   wayOfUse: string = '';
  public recipe: Recipe = new Recipe();
  clicked: boolean = false;
  public physicianSchedule: PhysicianSchedule = new PhysicianSchedule();
  examinationReport: ExaminationReport = new ExaminationReport();




  constructor(private symptomService: SymptomService, private _formBuilder: FormBuilder, private medicineService: MedicineService, private examinationReportService: ExaminationReportService, private physicianScheduleService: PhysicianScheduleService, private examinationService: ExaminationService) { }

  ngOnInit(): void {
    this.symptomService.getSymptoms().subscribe(res => {
      this.symptoms = res;
    })

    this.medicineService.getMedicines().subscribe(res => {
      this.medicines = res;
    })

    //zakucao za doktora sa id-jem 1
    this.physicianScheduleService.getAppointments(1).subscribe(res => {
      this.appointments = res;
      console.log(res);
    })

    this.physicianScheduleService.getPhysicianSchedule(1).subscribe(res => {
      this.physicianSchedule = res;
    })

  }

  public setAppointmentToFinish() {
    this.physicianSchedule.appointments.forEach((appointment, index) => {
      if (appointment.id === this.examinationReport.appointmentId) {
          this.physicianSchedule.appointments[index].isFinished = true;
          console.log(this.physicianSchedule);
          this.physicianScheduleService.updatePhysicianSchedule(this.physicianSchedule);
      }
    })
  }

  public createRecipe() {
    var i = 0;
    Object.entries(Object(this.selectedMedicinesIds.value)).forEach(([key, value], index) => {
      console.log(value);
      this.recipe.medicineIds[i] = Number(value);
      i++;
    }); 
    this.recipe.wayOfUse = this.wayOfUse.trim();
    this.examinationReport.recipes.push(this.recipe);
    this.recipe = new Recipe();
    this.selectedMedicinesIds = new FormControl('');
    this.wayOfUse = '';
  }

  public checkArray() {
    console.log(this.selectedSymptomIds.value);
  }

  public create() {
    this.examinationReport.symptomIds = [];
    var i = 0;
    Object.entries(Object(this.selectedSymptomIds.value)).forEach(([key, value], index) => {
      console.log(value);
      this.examinationReport.symptomIds[i] = Number(value);
      i++;
    });   
  }

  public viewReport() {
    this.clicked = true;
    this.selectedMedicines = [];
    this.selectedSymptoms = [];
    if (this.examinationReport.symptomIds.length !== 0) {
    this.symptomService.getSelectedSymptoms(this.examinationReport.symptomIds).subscribe(res => {
      this.selectedSymptoms = res;
      console.log(res);
    })
    }
    this.medicineIds = [];

    // for (var recipe:Recipe in this.examinationReport.recipes) {
    //   for (let medicine of recipe.medicines) {
    //     this.medicineIds.push(medicine.medicineId);
    //   }
    // }

    this.examinationReport.recipes.forEach((recipe) => {
      recipe.medicineIds.forEach(id => {
        this.medicineIds.push(id);
      });
    })


    if (this.medicineIds.length !== 0) {
    this.medicineService.getSelectedMedicines(this.medicineIds).subscribe(res => {
      this.selectedMedicines = res;
      console.log(this.selectedMedicines);
    })
  }

  }

  public createExaminationReport() {
    if (this.wayOfUse !== '') {
      this.createRecipe();
    }
    if (this.examinationReport.appointmentId === 0) {
      alert("Please select patient!");
    }
    else if (this.examinationReport.report === '') {
      alert('Please enter examination report');
    } 
    else {
      this.examinationReportService.createExaminationReport(this.examinationReport).subscribe(res => {
        this.setAppointmentToFinish();
        alert("Created!");
        console.log(this.examinationReport);
      })
    }
    
  }

  public startExamination() {
    this.examinationService.startExamination(this.examinationReport.appointmentId).subscribe(res => {
      alert("Exam started!");
    })
  }

  public addSymptoms() {
    this.examinationService.addSymptoms(this.examinationReport.appointmentId).subscribe(res => {
      alert("Symptoms added!");
    })
  }

  public addReport() {
    this.examinationService.addReport(this.examinationReport.appointmentId).subscribe(res => {
      alert("Report added!");
    })
  }

  public addRecipes() {
    this.examinationService.addRecipes(this.examinationReport.appointmentId).subscribe(res => {
      alert("Recipes added!");
    })
  }

  public finishExamination() {
    this.examinationService.finishExamination(this.examinationReport.appointmentId).subscribe(res => {
      alert("Finished!");
    })
  }

  public callAll() {
    this.create();
    this.addSymptoms();
  }

  public all() {
    this.createExaminationReport();
    this.finishExamination();
  }

  }


