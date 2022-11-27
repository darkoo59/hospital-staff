import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Observable, tap } from "rxjs";
import { NavRoute } from "../../components/nav/manager-nav.component";
import { BloodRequest } from "./model/blood-request.model";
import { BloodReqService } from "./services/blood-req.service";

@Component({
  selector: 'blood-req',
  templateUrl: './blood-req.component.html',
  styleUrls: ['./blood-req.component.scss']
})
export class BloodReqComponent implements OnInit, OnDestroy {
  m_Error$: Observable<string | null> = this.m_BloodReqService.m_Error$.pipe(
    tap(error => {
      this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
      this.m_Loading = false
    })
  );
  m_BloodRequests$: Observable<BloodRequest[] | null> = this.m_BloodReqService.m_Data$.pipe(tap(data => {
    if (data) this.m_Loading = false;
  }));

  m_Routes: NavRoute[] = [
    {
      path: 'new',
      title: 'New Requests'
    },
    {
      path: 'approved',
      title: 'Approved'
    },
    {
      path: 'declined',
      title: 'Declined'
    },
    {
      path: 'update',
      title: 'For adjustment'
    }
  ];

  m_ActiveLink: string = this.m_Routes[0].path;
  m_Loading: boolean = true;

  constructor(private m_Route: ActivatedRoute, private m_BloodReqService: BloodReqService, private m_SnackBar: MatSnackBar) { }

  ngOnInit() {
    this.m_ActiveLink = this.m_Route.snapshot.firstChild?.url[0].path!;
  }

  ngOnDestroy(): void {
    this.m_BloodReqService.resetData();
  }

  changeTab(path: string): void {
    this.m_ActiveLink = path
  }
}