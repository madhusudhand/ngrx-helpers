import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
