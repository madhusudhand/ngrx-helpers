import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { APP_ACTIONS } from '../actions';
import { ENDPOINT } from '../endpoint';
import { RootEffect } from 'projects/ngrx-helpers/src/store/root-effect';
import { HttpMethod } from 'projects/ngrx-helpers/src/enums/http-method.enum';

@Injectable()
export class UserEffects extends RootEffect {

  constructor(
    action$: Actions,
    httpClient: HttpClient
  ) {
    super(action$, httpClient);
  }

  @Effect() userInfo = super.effect({
    action: APP_ACTIONS.GET_USER,
    type: HttpMethod.GET,
    endpoint: ENDPOINT.GITHUB_USER,
  });
}
