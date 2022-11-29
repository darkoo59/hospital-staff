import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, switchMap, tap } from 'rxjs';
import { EqTender, TenderItem } from '../../model/eq-tender.model';
import { EqTenderService } from '../../services/eq-tender.service';

@Component({
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent {
  m_Form: UntypedFormGroup = new UntypedFormGroup({
    'title': new UntypedFormControl(null, [Validators.required]),
    'expiresOn': new UntypedFormControl(null),
    'description': new UntypedFormControl(null)
  });

  m_ItemForm: UntypedFormGroup = new UntypedFormGroup({
    'name': new UntypedFormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    'amount': new UntypedFormControl(null, [Validators.required])
  });

  m_ItemFormActive: boolean = false;
  m_Items: TenderItem[] = [];

  m_Create$: Subject<EqTender> = new Subject().pipe(
    switchMap((tender: any) => {
      return this.m_EqTenderService.createTender(tender).pipe(
        switchMap(_ => this.m_EqTenderService.fetchTenders()),
        tap(_ => this.m_Router.navigate(['/manager/eq-tender/all']))
      );
    })
  ) as Subject<EqTender>;

  constructor(private m_EqTenderService: EqTenderService, private m_Router: Router) { }

  onSubmit(): void {
    if (!this.m_Form.valid) return;

    let tender: EqTender = this.m_Form.getRawValue();
    tender.requirements = this.m_Items;
    console.log(tender);
    this.m_Create$.next(tender);
  }

  onItemSubmit(): void {
    if (!this.m_ItemForm.valid) return;

    let item: TenderItem = this.m_ItemForm.getRawValue();
    this.m_Items = [...this.m_Items, item];
    this.m_ItemFormActive = false;
    this.m_ItemForm.reset();
  }
}