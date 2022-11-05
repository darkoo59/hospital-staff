import { Component, OnInit } from "@angular/core";
import { BB_NewsService } from "../services/bb-news.service";

@Component({
  template: `<news-grid (m_ApproveEvent)="approve($event)"></news-grid>`
})
export class DisapprovedNewsComponent implements OnInit {

  constructor(private m_BBNewsService: BB_NewsService) { }
  
  ngOnInit(): void {
    this.m_BBNewsService.fetchDisapprovedNews();
  }

  approve(id: number): void {
    this.m_BBNewsService.approveNews(id).subscribe(_ => {
      this.m_BBNewsService.fetchDisapprovedNews();
    });
  }
  
}