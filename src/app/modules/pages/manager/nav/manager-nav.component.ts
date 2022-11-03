import { Component } from "@angular/core";

interface NavRoute {
  path: string;
  title: string;
}

@Component({
  selector: 'app-manager-nav',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.scss']
})
export class ManagerNavComponent {
  m_Routes: NavRoute[] = [
    {
      path: 'feedback',
      title: 'Feedback'
    },
    {
      path: 'bb-register',
      title: 'Blood bank register'
    },
    {
      path: 'bb-news',
      title: 'Blood bank news'
    }
  ];

  constructor() { }
}
