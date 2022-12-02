import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { BloodBank } from './model/blood-bank.model';
import { UrgentOrderService } from './services/urgent-order.service';

@Component({
  selector: 'app-urgent-order',
  templateUrl: './urgent-order.component.html',
  styleUrls: ['./urgent-order.component.css']
})
export class UrgentOrderComponent implements OnInit {

  constructor(private service: UrgentOrderService) { }

  bbList! : BloodBank[];
  
  ngOnInit() {
    this.service.findAll().pipe(take(1))
      .subscribe(data => {
        this.bbList = data;
      })
  }

  form: UntypedFormGroup = new UntypedFormGroup({
    'blood-type-select': new FormControl(null, Validators.required),
    'bb-select': new FormControl(null, Validators.required),
    'quantity': new FormControl(null, Validators.required)
  });

  m_Errors: string[] = [];

  onSubmit() : void {
    this.m_Errors.length = 0;
    
  }

}
