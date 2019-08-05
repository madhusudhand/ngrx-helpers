import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DemosComponent } from './demos.component';
import { ResolvingComponent } from './resolving/resolving.component';
import { NgrxHelperModule } from 'ngrx-helpers';
import { ErrorComponent } from './error/error.component';
import { ResolvedComponent } from './resolved/resolved.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgrxHelperModule.forRoot()
  ],
  declarations: [DemosComponent, ResolvingComponent, ErrorComponent, ResolvedComponent],
})
export class DemosModule { }
