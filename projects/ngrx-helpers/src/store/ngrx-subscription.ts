import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface SubscriptionInput {
  feature: string;
  reducer: string;
  state?: string;
}

export class NgrxStoreSubscription {
  constructor(private _store: Store<any>) {}

  getState(input: SubscriptionInput): Observable<any> {
    let stateObservable = this._store.pipe(
            select(s => s[input.feature]),
            select(s => s[input.reducer])
          );

    if (input.state) {
      stateObservable = stateObservable.pipe(
        select(s => s[input.state])
      );
    }

    return stateObservable;
  }
}
