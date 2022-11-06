import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BB_NewsService } from "../../services/bb-news.service";

@Component({
  templateUrl: './approved-news.component.html'
})
export class ApprovedNewsComponent {
  m_Disapprove$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'disapprove').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('approved'))
      )
    })
  ) as Subject<number>;
  m_FetchNews$: Observable<any> = this.m_BBNewsService.fetchNews('approved');

  constructor(private m_BBNewsService: BB_NewsService) { }
  
}