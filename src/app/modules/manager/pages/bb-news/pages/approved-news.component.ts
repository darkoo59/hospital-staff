import { Component, OnInit } from "@angular/core";
import { BB_NewsService } from "../services/bb-news.service";

@Component({
  template: `<news-grid (m_DisapproveEvent)="disapprove($event)"></news-grid>`
})
export class ApprovedNewsComponent implements OnInit {

  constructor(private m_BBNewsService: BB_NewsService) { }
  
  ngOnInit(): void {
    this.m_BBNewsService.fetchApprovedNews();
  }

  disapprove(id: number): void {
    this.m_BBNewsService.disapproveNews(id).subscribe(_ => {
      this.m_BBNewsService.fetchApprovedNews();
    });
  }
}