import { Component, OnInit } from '@angular/core';
import { thresholdScott } from 'd3';
import { Doctor } from '../model/doctor.model';
import { ConsiliumService } from '../services/consilium.service';
import { DoctorService } from '../services/doctor.service';
import { Consilium } from '../model/consilium.model';
import { ThisReceiver } from '@angular/compiler';
import { SpecializationService } from '../services/specialization.service';
import { Specialization } from '../model/specialization.model';

@Component({
  selector: 'app-create-consilium',
  templateUrl: './create-consilium.component.html',
  styleUrls: ['./create-consilium.component.css']
})
export class CreateConsiliumComponent implements OnInit {

  minDate = new Date();
  
  Doctors : any = [];

  OriginalDoctorsList : any = [];

  Specialization : any = [];

  doctorIds : any = [];

  consilium: Consilium = new Consilium();

  startDate : Date = new Date();

  endDate : Date = new Date();

  specialization : Specialization = new Specialization();

  public CreateConsilium(consilium: Consilium) {
    
      if (!this.isTopicInputEmpty()) {
        alert("You must fill in the topic!");
        return;
      };

      if (!this.IsDoctorCheckBoxEmpty() && !this.IsSpecializationEmpty() ) {
        alert("You must select doctor or specialization!");
        return;
      };

      if (!this.isDurationEmpty()) {
        alert("You must choose duration!");
        return;
      };

      if(!this.isEndDateValid()){
        alert("The last day must be after the first!");
        return;
      };
      
      this.consiliumService.CreateConsilium(consilium).subscribe(res=> {
        this.consilium = res;
        alert("You have successfully created a consilium!");
    })
  }

  public handleOptionChange(){
    return this.consilium.doctorIds;
  }

  public handleOptionChange1(){
    return this.consilium.specializationIds;
  }

  private isEndDateValid() {
    return this.consilium.dateRangeEnd > this.consilium.dateRangeStart;
 }

 private isTopicInputEmpty() {
  return this.consilium.topic != "";
 } 
 
 private isDurationEmpty() {
  return this.consilium.duration != 0;
}

private IsDoctorCheckBoxEmpty(){
  return this.consilium.doctorIds.length != 0;
}

private IsSpecializationEmpty(){
  return this.consilium.specializationIds.length != 0;
}

  constructor(private doctorService : DoctorService, private consiliumService : ConsiliumService,private specializationService : SpecializationService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(res => {
      this.Doctors = res;  
    })
    this.specializationService.getSpecializations().subscribe(res => {
      this.Specialization = res;
    })
  }
}
