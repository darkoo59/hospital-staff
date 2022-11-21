import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EMPTY, switchMap, take } from 'rxjs';
import { AuthService } from './modules/pages/login/log-auth.service';
import { UserDataService } from './modules/pages/login/log-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private m_AuthService : AuthService, private m_UserDataService : UserDataService){}
  ngOnInit(): void {
    this.m_UserDataService.m_Token$.pipe(take(1), switchMap(token => {
      return !!token ? this.m_AuthService.getUserData() : EMPTY;
    })).subscribe();
  }
  title = 'HospitalFront';
}
