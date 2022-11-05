import { Component, OnInit } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { tap } from "rxjs";

@Component({
  selector: 'app-bb-news',
  templateUrl: './bb-news.component.html',
  styleUrls: ['./bb-news.component.scss']
})
export class BBNewsComponent implements OnInit {
  m_TabControl: UntypedFormControl = new UntypedFormControl(null);

  m_TabControlChanges$ = this.m_TabControl.valueChanges.pipe(tap(data => {
    this.m_Router.navigate(['/manager', 'bb-news', data]);
  }));

  constructor(private m_Router: Router, private m_Route: ActivatedRoute) { }

  ngOnInit() {
    this.m_TabControl.setValue(this.m_Route.snapshot.firstChild?.url[0].path);
  }
  
}