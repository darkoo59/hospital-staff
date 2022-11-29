import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { BBNews } from "../model/bb-news.model";
import { BBNewsService } from "../services/bb-news.service";

@Component({
  selector: 'news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent {
  m_News: Observable<BBNews[] | null> = this.m_BBNewsService.m_Data$;
  @Output() m_ApproveEvent: EventEmitter<number> = new EventEmitter();
  @Output() m_DeclineEvent: EventEmitter<number> = new EventEmitter();

  constructor(private m_BBNewsService: BBNewsService) { }
  
}