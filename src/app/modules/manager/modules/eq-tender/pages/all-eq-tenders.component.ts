import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { EqTenderService } from "../services/eq-tender.service";

@Component({
  template: `
    <div *ngLet="{data: m_FetchData$ | async} as vm">{{vm.data}}</div>  
  `
})
export class AllEqTendersComponent {
  m_FetchData$: Observable<any> = this.m_EqTenderService.fetchTenders();

  constructor(private m_EqTenderService: EqTenderService){}
}