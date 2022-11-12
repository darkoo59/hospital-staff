import { Component, OnDestroy, OnInit } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { BloodReqService } from "./services/blood-req.service";

@Component({
  selector: 'blood-req',
  templateUrl: './blood-req.component.html',
  styleUrls: ['./blood-req.component.scss']
})
export class BloodReqComponent implements OnInit, OnDestroy {
  m_TabControl: UntypedFormControl = new UntypedFormControl(null);
  m_Error$: Observable<string | null> = this.m_BloodReqService.m_Error$.pipe(
    tap(error => this.m_SnackBar.open(error!, 'close', { duration: 4000 }))
  );

  m_TabControlChanges$ = this.m_TabControl.valueChanges.pipe(tap(data => {
    this.m_Router.navigate(['/manager', 'blood-req', data]);
    this.m_BloodReqService.resetData();
  }));

  constructor(private m_Router: Router, private m_Route: ActivatedRoute, private m_BloodReqService: BloodReqService, private m_SnackBar: MatSnackBar) { }

  ngOnInit() {
    this.m_TabControl.setValue(this.m_Route.snapshot.firstChild?.url[0].path);
  }

  ngOnDestroy(): void {
    this.m_BloodReqService.resetData();
  }
}