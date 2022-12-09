import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, catchError, of, tap } from "rxjs";
import { EqTenderService } from "../../services/eq-tender.service";

@Component({
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent { 
  m_TenderId: number = -1;
  m_Loading: boolean = true;

  m_Tender$ = this.m_Route.paramMap.pipe(
    switchMap(params => {
      let id: any = params.get('id');
      id = parseInt(id);

      if (isNaN(id) || id < 0)
        throw new Error("Invalid ID");

      this.m_TenderId = id;
      return this.m_EqTenderService.fetchTenderWithApplications(id);
    }),
    catchError(_ => {
      this.m_Router.navigate(['..'], { relativeTo: this.m_Route });
      return of({});
    }),
    tap(_ => this.m_Loading = false)
  );

  constructor(private m_Route: ActivatedRoute, private m_Router: Router, private m_EqTenderService: EqTenderService) { }

  isInPast(date: Date | null): boolean {
    if (!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0, 0, 0, 0);
    if (n <= now) return true;
    return false;
  }
}