import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BloodReqService } from "../../services/blood-req.service";

@Component({
  templateUrl: './blood-req-approved.component.html',
})
export class BloodReqApprovedComponent {
  m_Disapprove$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BloodReqService.patchNewsState(id, 'disapprove').pipe(
        switchMap(_ => this.m_BloodReqService.fetchBloodRequests('approved'))
      )
    })
  ) as Subject<number>;
  m_FetchData$: Observable<any> = this.m_BloodReqService.fetchBloodRequests('approved');

  constructor(private m_BloodReqService: BloodReqService){}
}