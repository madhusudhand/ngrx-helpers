import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { appReducers } from './_store/app.reducers';
import { appEffects } from './_store/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgrxHelperModule } from 'ngrx-helpers';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { DocumentationModule } from './modules/documentation/documentation.module';
import { DemosModule } from './modules/demos/demos.module';
import { SharedModule } from './modules/shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
const rootReducers: ActionReducerMap<any> = {
  router: fromRouter.routerReducer,
  // logger,
};

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'javascript', func: javascript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    DocumentationModule,
    DemosModule,
    SharedModule,
    StoreModule.forRoot(rootReducers, {}),
    StoreModule.forFeature('APP', appReducers),
    EffectsModule.forRoot(appEffects),
    NgrxHelperModule.forRoot(),
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
