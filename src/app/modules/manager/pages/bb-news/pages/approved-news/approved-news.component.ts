import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { BB_NewsService } from "../../services/bb-news.service";

@Component({
  templateUrl: './approved-news.component.html'
})
export class ApprovedNewsComponent implements OnInit {

  constructor(private m_BBNewsService: BB_NewsService) { }
  
  ngOnInit(): void {
    this.m_BBNewsService.fetchNews('approved').subscribe();
  }

  disapprove(id: number): void {
    this.m_BBNewsService.patchNewsState(id, 'disapprove').pipe(
      switchMap(_ => this.m_BBNewsService.fetchNews('approved'))
    ).subscribe();
  }
}