import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {

  constructor(private m_Router: Router){}

  navigateBack(): void {
    this.m_Router.navigate(['/']);
  }

}
