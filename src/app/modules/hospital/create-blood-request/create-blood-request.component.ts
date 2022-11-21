import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { thresholdScott } from 'd3';
import { Doctor } from '../../manager/model/doctor.model';
import { BloodRequest } from '../model/blood-request.model';
import { BloodService } from '../services/blood.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-create-blood-request',
  templateUrl: './create-blood-request.component.html',
  styleUrls: ['./create-blood-request.component.css']
})
export class CreateBloodRequestComponent implements OnInit {

  public bloodRequest: BloodRequest = new BloodRequest();

  bloodTypes = [
    { value: "AB-", viewValue: "AB-" },
    { value: "AB+", viewValue: "AB+"},
    { value: "A-", viewValue: "A-" },
    { value: "A+", viewValue: "A+"},
    { value: "B-", viewValue: "B-" },
    { value: "B+", viewValue: "B+"},
    { value: "O-", viewValue: "O-" },
    { value: "O+", viewValue: "O+"},
  ]



  constructor(private bloodService: BloodService, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    detectChanges();
  }

  public createBloodRequest() {
    if (this.isValid()) {
    this.bloodService.createBloodRequest(this.bloodRequest).subscribe(res => {
      alert("Request is sent!");
    });
    } else {
      alert("All fields must be filled!");
    }
  }

  private isValid(): boolean {
    return this.bloodRequest.bloodType != '' && this.bloodRequest.reasonForRequest != ''
    && this.bloodRequest.quantityInLiters != 0;
  }

}


function detectChanges() {
  throw new Error('Function not implemented.');
}

