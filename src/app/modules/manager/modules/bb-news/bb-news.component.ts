import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Observable, tap } from "rxjs";
import { NavRoute } from "../../components/nav/manager-nav.component";
import { BBNews } from "./model/bb-news.model";
import { BBNewsService } from "../../modules/bb-news/services/bb-news.service";

@Component({
  selector: 'app-bb-news',
  templateUrl: './bb-news.component.html',
  styleUrls: ['./bb-news.component.scss']
})
export class BBNewsComponent implements OnInit, OnDestroy {
  m_Error$: Observable<string | null> = this.m_BBNewsService.m_Error$.pipe(
    tap(error => {
      this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
      this.m_Loading = false
    })
  );

  m_BBNews$: Observable<BBNews[] | null> = this.m_BBNewsService.m_Data$.pipe(tap(data => {
    if (data) this.m_Loading = false;
  }));

  m_Routes: NavRoute[] = [
    {
      path: 'new',
      title: 'New'
    },
    {
      path: 'approved',
      title: 'Approved'
    },
    {
      path: 'declined',
      title: 'Declined'
    }
  ];

  activeLink: string = this.m_Routes[0].path;
  m_Loading: boolean = true;

  constructor(private m_Route: ActivatedRoute, private m_BBNewsService: BBNewsService, private m_SnackBar: MatSnackBar) { }

  ngOnInit() {
    this.activeLink = this.m_Route.snapshot.firstChild?.url[0].path!;
  }

  ngOnDestroy() {
    this.m_BBNewsService.resetData();
  }

  changeTab(path: string): void {
    this.activeLink = path
  }

}