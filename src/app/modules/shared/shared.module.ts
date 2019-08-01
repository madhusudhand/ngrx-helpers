import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CodeComponent } from './code/code.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [HeaderComponent, CodeComponent],
  declarations: [HeaderComponent, CodeComponent]
})
export class SharedModule { }
