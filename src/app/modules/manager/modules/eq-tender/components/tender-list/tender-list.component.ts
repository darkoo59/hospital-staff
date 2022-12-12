import { Component } from "@angular/core";
import { Observable, tap } from "rxjs";
import { EqTender } from "../../model/eq-tender.model";
import { EqTenderService } from "../../services/eq-tender.service";

@Component({
  selector: 'tender-list',
  templateUrl: `./tender-list.component.html`,
  styleUrls: ['./tender-list.component.scss']
})
export class TenderListComponent {
  m_Data$: Observable<EqTender[] | null> = this.m_EqTenderService.m_Data$;

  constructor(private m_EqTenderService: EqTenderService) { }

  isInPast(date: Date | null): boolean {
    if(!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0,0,0,0);
    if(n <= now) return true;
    return false;
  }
}