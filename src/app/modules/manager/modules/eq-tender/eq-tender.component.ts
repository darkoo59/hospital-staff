import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavRoute } from "../../components/nav/manager-nav.component";
import { BloodReqService } from "../blood-requests/services/blood-req.service";

@Component({
  templateUrl: './eq-tender.component.html',
  styleUrls: ['./eq-tender.component.scss']
})
export class EqTenderComponent {

  m_Routes: NavRoute[] = [
    {
      path: 'all',
      title: 'All Tenders'
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

  constructor(private m_Route: ActivatedRoute, private m_BloodReqService: BloodReqService) { }

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