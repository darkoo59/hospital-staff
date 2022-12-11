import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { BloodRequest } from "../../model/blood-request.model";
import { BloodReqService } from "../../services/blood-req.service";

@Component({
  selector: 'blood-req-grid',
  templateUrl: './blood-req-grid.component.html',
  styleUrls: ['./blood-req-grid.component.scss']
})
export class BloodReqGridComponent {
  m_Data$: Observable<BloodRequest[] | null> = this.m_BloodReqService.m_Data$;
  @Output() m_ApproveEvent: EventEmitter<number> = new EventEmitter();
  @Output() m_DeclineEvent: EventEmitter<number> = new EventEmitter();
  @Output() m_UpdateEvent: EventEmitter<number> = new EventEmitter();

  constructor(private m_BloodReqService: BloodReqService) { }

}