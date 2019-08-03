import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosComponent } from './demos.component';
import { ResolvingComponent } from './resolving/resolving.component';
import { CodeDemoComponent } from './code-demo/code-demo.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemosComponent, ResolvingComponent, CodeDemoComponent]
})
export class DemosModule { }
