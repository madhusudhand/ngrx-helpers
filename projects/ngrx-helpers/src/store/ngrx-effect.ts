import { Actions, ofType } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomAction } from './custom-action';
import { of, merge, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NgrxEffectConfig } from '../enums/effect-config.enum';
import { HttpMethod } from '../enums/http-method.enum';

export abstract class NgrxEffect {

  constructor(
    protected action$: Actions,
    protected httpClient: HttpClient,
  ) { }

  public effect(effectConfig: NgrxEffectConfig): Observable<any> {
    return this.action$
      .pipe(ofType(effectConfig.action))
      .pipe(
        switchMap((action: CustomAction) => {
          return merge(
            of({
              type: `${effectConfig.action}_RESOLVING`
            }),
            this.getApiSubscription(action, effectConfig),
          );
        }));
  }

  private getApiSubscription(action, effectConfig) {
    const endpoint = this.getEndpoint(
      effectConfig.endpoint,
      action.payload && action.payload.pathParams
    );
    const params: any = action.payload && action.payload.queryParams;

    const body = action.payload && action.payload.body;
    let httpReqParams;
    let requestHeaders: HttpHeaders;
    if (effectConfig.requestHeaders) {
      requestHeaders = new HttpHeaders(effectConfig.requestHeaders);
    }
    if (effectConfig.type === HttpMethod.GET) {
      httpReqParams = [endpoint, { params, headers: requestHeaders }];
    } else {
      httpReqParams = [endpoint, body, { params, headers: requestHeaders }];
    }

    return this.httpClient[effectConfig.type](...httpReqParams)
      .pipe(
        map(res => {
          if (!res) {
            return {
              type: `${effectConfig.action}_EMPTY`,
              payload: Object.assign({}, action.payload, { data: res })
            };
          }
          return {
            type: `${effectConfig.action}_RESOLVED`,
            payload: Object.assign({}, action.payload, { data: res })
          };
        }),
        catchError(error => of({
          type: `${effectConfig.action}_ERROR`,
          payload: Object.assign({}, action.payload, { data: error })
        }))
      );
  }

  private getEndpoint(endpoint: string, pathParams?: string[]) {
    if (typeof endpoint !== 'string' || !Array.isArray(pathParams)) {
      return endpoint;
    }
    return endpoint.replace(/({\d})/g, function (i) {
      return pathParams[i.replace(/{/, '').replace(/}/, '')];
    });
  }
}
