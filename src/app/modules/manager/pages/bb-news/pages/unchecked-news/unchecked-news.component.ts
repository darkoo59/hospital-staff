import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { BB_NewsService } from "../../services/bb-news.service";

@Component({
  templateUrl: './unchecked-news.component.html'
})
export class UncheckedNewsComponent implements OnInit {

  constructor(private m_BBNewsService: BB_NewsService) { }
  
  ngOnInit(): void {
    this.m_BBNewsService.fetchNews('unchecked').subscribe();
  }
  
  approve(id: number): void {
    this.m_BBNewsService.patchNewsState(id, 'approve').pipe(
      switchMap(_ => this.m_BBNewsService.fetchNews('unchecked'))
    ).subscribe();
  }

  disapprove(id: number): void {
    this.m_BBNewsService.patchNewsState(id, 'disapprove').pipe(
      switchMap(_ => this.m_BBNewsService.fetchNews('unchecked'))
    ).subscribe();
  }
}