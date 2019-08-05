import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-demo',
  templateUrl: './code-demo.component.html',
  styleUrls: ['./code-demo.component.scss']
})
export class CodeDemoComponent implements OnInit {
  isCode = false;
  @Input() demoCode;
  tabs = [];
  selectedTab: String;
  selectedTabCode: String;
  constructor() { }

  ngOnInit() {
    this.tabs = Object.keys(this.demoCode);
    this.selectTab(this.tabs[0]);
  }

  selectTab(tab) {
    this.selectedTab = tab;
    this.selectedTabCode = this.demoCode[tab];
  }
}
