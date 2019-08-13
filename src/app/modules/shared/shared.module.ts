import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CodeComponent } from './code/code.component';
import { HighlightModule } from 'ngx-highlightjs';
import { RouterModule } from '@angular/router';

import { CodeDemoComponent } from './code-demo/code-demo.component';
@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    RouterModule,
  ],
  exports: [HeaderComponent, CodeComponent, CodeDemoComponent],
  declarations: [HeaderComponent, CodeComponent, CodeDemoComponent]
})
export class SharedModule { }
