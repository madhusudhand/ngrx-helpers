import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-helpers-demo';
  userInfo = {};

  menu = [
    {
      name: 'Documentation',
      path: '/docs'
    },
    {
      name: 'Demos',
      path: '/demo'
    }
  ];


  constructor() {}
}
