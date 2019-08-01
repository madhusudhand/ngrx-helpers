import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { HighlightModule } from 'ngx-highlightjs';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    SharedModule
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule { }
