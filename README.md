# ngrx-helpers

A library to simplify ngrx implementation in Angular Apps.

## Getting started

For complete reference, look at the [Example App](https://github.com/madhusudhand/ngrx-helpers).

### App Module configuration

import `NgrxHelperModule.forRoot()` in app.module along with other ngrx modules.

### Effects

The helper class `NgrxEffect` simplifies the effect configuration.
It lets you configure effects with minimal inputs such as action, endpint and http method.

```ts
@Injectable()
export class UserEffects extends NgrxEffect {

  constructor(
    action$: Actions,
    httpClient: HttpClient
  ) {
    super(action$, httpClient);
  }

  @Effect() userInfo = super.effect({
    action: APP_ACTIONS.GET_USER,
    type: 'get',
    endpoint: 'https://api.github.com/users/{0}',
  });
}
```

Every effect emits three actions (*_RESOLVING, *_RESOLVED, *_ERROR) as follows.

* **GET_USER_RESOLVING**: emitted immediately when the action GET_USER dispatched which helps setting corresponding loaders.
* **GET_USER_RESOLVED**: emitted when the api gets successfully resolved.
* **GET_USER_ERROR**: emitted when api fails with 4XX or 5XX status codes.

**Note:** endpint can be configured with params which can be sent at the time of dispatching action.

### Reducer

```ts
export interface UserState {
  readonly userInfo: NgrxObject<any>;
}

const defaultState: UserState = {
  userInfo: {
    state: DATA_STATE.INITIAL,
    data: null
  },
};

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_ACTIONS.GET_USER_RESOLVING:
      return StoreUtil.setResolving(state, 'userInfo', null);

    case APP_ACTIONS.GET_USER_RESOLVED:
      return StoreUtil.setResolved(state, 'userInfo', action.payload.data);

    case APP_ACTIONS.GET_USER_ERROR:
      return StoreUtil.setError(state, 'userInfo', 'Error Message');

    default:
      return state;
  }
}
```

### Dispatch action

```ts
this.store.dispatch({
  type: APP_ACTIONS.GET_USER,
  payload: {
    pathParams: ['octocat'],
    // queryParams: [{ name: 'value' }],
  },
});
```

### Subscribe a state

Subscriptions are simplified by extending the component from the helper class `NgrxStoreSubscription`.

```ts
export class AppComponent extends NgrxStoreSubscription implements OnInit {
  userInfo = {};

  constructor(private store: Store<any>) {
    super(store);
  }

  ngOnInit() {
    super.getState({
      feature: 'APP', // the feature of the reducer
      reducer: 'USER_REDUCER', // name of the reducer
      state: 'userInfo', // name state from the store
    }).subscribe((data) => {
      this.userInfo = data;
    });

    // refer to the example app to know how reducers registered for a feature
  }
}
```

### Managing Template

Every reducer gets resolved with data with the following format.

```ts
{
  state: DATA_STATE, // which can be RESOLVING, RESOLVED, ERROR
  data: any, // data which is set in the reducer
}
```

This format helps us set the appropriate view in the component template.

```html
<div [ngrxView]="userInfo.state">
  <div *ngrxViewResolving>Loading...</div>
  <div *ngrxViewError>Error fetching user info</div>
  <div *ngrxViewResolved>
    {{userInfo.data | json}}
  </div>
</div>
```

with the help of directives, component automatically responds based on the state from the store.

### Summary

When the action *GET_USER* gets dispatched

* it emits **GET_USER_RESOLVING**
  * which will set the `state` in store to 'RESOLVING'
  * the component will render ***ngrxViewResolving**. (a loader screen)
* if api call fails, it emits **GET_USER_ERROR**
  * which will set the `state` in store to 'RESOLVED'
  * the component will render ***ngrxViewError**. (error screen)
* if api call fails, it emits **GET_USER_RESOLVED**
  * which will set the `state` in store to 'RESOLVED'
  * the component will render ***ngrxViewResolved**. (appropriate UI for user data)

