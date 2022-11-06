import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BB_NewsService } from "../../services/bb-news.service";

@Component({
  templateUrl: './disapproved-news.component.html'
})
export class DisapprovedNewsComponent {
  m_Approve$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'approve').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('disapproved'))
      )
    })
  ) as Subject<number>;
  m_FetchNews$: Observable<any> = this.m_BBNewsService.fetchNews('disapproved');

  constructor(private m_BBNewsService: BB_NewsService) { }

}