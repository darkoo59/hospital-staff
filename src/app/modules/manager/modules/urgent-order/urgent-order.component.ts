import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, take } from 'rxjs';
import { BloodBank } from './model/blood-bank.model';
import { UrgentOrderDTO } from './model/urgent-order-dto';
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

    var entireServer = this.form.get('bb-select')?.value

    const dto: UrgentOrderDTO = {
      bloodType: this.form.get('blood-type-select')?.value,
      quantity: this.form.get('quantity')?.value,
      server: entireServer.server
    }

    console.log(dto.bloodType + " " + dto.quantity + " " + dto.server)

    this.form.updateValueAndValidity();
    if (!this.form.valid)  return;
    
    this.service.OrderUrgently(dto)
      .pipe(catchError(res => {
        console.log(res);
        const error = res.error;
        if(error && error.message) {
          this.m_Errors.push(error.message);
          return EMPTY;
        }
        this.m_Errors.push(error);
        return EMPTY;
      }))
      .subscribe(data => {
        console.log(dto.bloodType + " " + dto.quantity + " " + dto.server)
      });
  
  }

}
