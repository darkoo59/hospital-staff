import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { BB_News } from "../../../model/bb-news.model";
import { BB_NewsService } from "../services/bb-news.service";

@Component({
  selector: 'news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class GridComponent {
  m_News: Observable<BB_News[]> = this.m_BBNewsService.m_BBNews$;
  @Output() m_ApproveEvent: EventEmitter<number> = new EventEmitter();
  @Output() m_DisapproveEvent: EventEmitter<number> = new EventEmitter();

  constructor(private m_BBNewsService: BB_NewsService) { }
  
}