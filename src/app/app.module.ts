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

const rootReducers: ActionReducerMap<any> = {
  router: fromRouter.routerReducer,
  // logger,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducers, {}),
    StoreModule.forFeature('APP', appReducers),
    EffectsModule.forRoot(appEffects),
    NgrxHelperModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
