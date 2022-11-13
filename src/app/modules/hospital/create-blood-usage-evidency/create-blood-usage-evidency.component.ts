import { Component, OnInit } from '@angular/core';
import { BloodUsageEvidency } from '../model/blood-usage-evidency.model';
import { BloodUsageEvidencyService } from '../services/blood-usage-evidency.service';

@Component({
  selector: 'app-create-blood-usage-evidency',
  templateUrl: './create-blood-usage-evidency.component.html',
  styleUrls: ['./create-blood-usage-evidency.component.css']
})
export class CreateBloodUsageEvidencyComponent implements OnInit {
  public  bloodUsageEvidency : BloodUsageEvidency = new BloodUsageEvidency();

  bloodTypes =[
    {value: 'O-', viewValue: 'O-'},
    {value: 'A-', viewValue: 'A-'},
    {value: 'B-', viewValue: 'B-'},
    {value: 'AB-', viewValue: 'AB-'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'A+', viewValue: 'A+'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'AB+', viewValue: 'AB+'}
  ];

  rhGroup =[
    '+',
    '-'
  ]


  constructor(private bloodUsageEvidencyService: BloodUsageEvidencyService) { }

  ngOnInit(): void {
  }

  public createBloodUsageEvidency(){
    if(this.isFormCorrectlyFilled()){
      this.bloodUsageEvidencyService.createBloodUsageEvidency(this.bloodUsageEvidency).subscribe(res => {
        if (res.bloodUsageEvidencyId === 0){
          alert("There is not enough blood in blood bank !");
          this.bloodUsageEvidency.quantityUsedInMililiters = 0;
        }
        else {
          alert("Blood usage evidency is entered!");
          this.bloodUsageEvidency =  new BloodUsageEvidency();
        }
      });
    
    }

  }

  public isFormCorrectlyFilled(){
    
    if((this.bloodUsageEvidency.bloodType == "" && this.bloodUsageEvidency.reasonForUsage == "") || (this.bloodUsageEvidency.reasonForUsage == "" && this.bloodUsageEvidency.quantityUsedInMililiters==0) || (this.bloodUsageEvidency.reasonForUsage  == "" && this.bloodUsageEvidency.quantityUsedInMililiters==0)){
      alert("You must enter all fields !");
      return false;
    }else if(this.bloodUsageEvidency.quantityUsedInMililiters<=0){
      alert("Quantity must be positive number !");
      this.bloodUsageEvidency.quantityUsedInMililiters = 0
      this.bloodUsageEvidency.quantityUsedInMililiters = 0;
      return false;
    }else if(this.bloodUsageEvidency.bloodType == ""){
      alert("You must choose blood type !");
      return false;
    }else if(this.bloodUsageEvidency.reasonForUsage == ""){
      alert("You must write reason for usage !");
      return false;
    }
    else{
      return true;
    }

  }

}
