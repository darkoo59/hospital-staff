import { Injectable } from "@angular/core";
import { Observable, forkJoin, catchError, EMPTY } from "rxjs";
import { GenericDataService } from "../../../services/generic-data.service";
import { EqTenderService } from "./eq-tender.service";

@Injectable()
export class LoadingService extends GenericDataService<boolean> {
  private m_FetchTenderData$: Observable<any> = this.m_EqTenderService.fetchTenders();

  constructor(private m_EqTenderService: EqTenderService) {
    super();
    this.setData = true;
  }

  loadData(): Observable<any> {
    return forkJoin([this.m_FetchTenderData$], (d1) => {
      this.setData = false;
    }).pipe(catchError((res: any) => {
      this.setError = res;
      this.setData = false
      return EMPTY;
    }));
  }

  resetTenderData(): void {
    this.m_EqTenderService.resetData();
    this.clearError();
    this.setData = true;
  }
}