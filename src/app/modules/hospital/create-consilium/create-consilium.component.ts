import { Component, OnInit } from '@angular/core';
import { thresholdScott } from 'd3';
import { Doctor } from '../model/doctor.model';
import { ConsiliumService } from '../services/consilium.service';
import { DoctorService } from '../services/doctor.service';
import { Consilium } from '../model/consilium.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-create-consilium',
  templateUrl: './create-consilium.component.html',
  styleUrls: ['./create-consilium.component.css']
})
export class CreateConsiliumComponent implements OnInit {

  minDate = new Date();
  
  Doctors : any = [];

  doctorIds : any = [];

  specializationIds : any = [];

  consilium: Consilium = new Consilium();

  public CreateConsilium(consilium: Consilium) {
    this.consiliumService.CreateConsilium(consilium).subscribe(res=> {
      this.consilium = res;
    })
  }

  public handleOptionChange(){
    return this.consilium.doctorIds;
  }

  constructor(private doctorService : DoctorService, private consiliumService : ConsiliumService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(res => {
      this.Doctors = res;
    })
  }
}
