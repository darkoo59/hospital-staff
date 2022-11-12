import { Component, OnDestroy, OnInit } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { BBNewsService } from "../../modules/bb-news/services/bb-news.service";

@Component({
  selector: 'app-bb-news',
  templateUrl: './bb-news.component.html',
  styleUrls: ['./bb-news.component.scss']
})
export class BBNewsComponent implements OnInit, OnDestroy {
  m_TabControl: UntypedFormControl = new UntypedFormControl(null);
  m_Error$: Observable<string | null> = this.m_BBNewsService.m_Error$.pipe(
    tap(error => this.m_SnackBar.open(error!, 'close', { duration: 4000 }))
  );

  m_TabControlChanges$ = this.m_TabControl.valueChanges.pipe(tap(data => {
    this.m_Router.navigate(['/manager', 'bb-news', data]);
    this.m_BBNewsService.resetData();
  }));

  constructor(private m_Router: Router, private m_Route: ActivatedRoute, private m_BBNewsService: BBNewsService, private m_SnackBar: MatSnackBar) { }

  ngOnInit() {
    this.m_TabControl.setValue(this.m_Route.snapshot.firstChild?.url[0].path);
  }

  ngOnDestroy() {
    this.m_BBNewsService.resetData();
  }

}