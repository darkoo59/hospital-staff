import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { BloodReqService } from "../services/blood-req.service";

@Component({
  template: `
    <blood-req-grid  *ngLet="m_FetchData$ | async"></blood-req-grid>
  `
})
export class BloodReqDeclinedComponent {
  m_FetchData$: Observable<any> = this.m_BloodReqService.fetchBloodRequests('declined');

  constructor(private m_BloodReqService: BloodReqService){}
}