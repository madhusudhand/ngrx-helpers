export const EFFECTS_CODE = `
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
`;

export const REDUCER_CODE = `
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
`;

export const DISPATCH_ACTIONS_CODE = `
this.store.dispatch({
  type: APP_ACTIONS.GET_USER,
  payload: {
    pathParams: ['octocat'],
    // queryParams: [{ name: 'value' }],
  },
});
`;

export const SUBSCRIBE_STATE_CODE = `
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
`;

export const MANAGE_TEMPLATE_CODE1 = `
{
  state: DATA_STATE, // which can be RESOLVING, RESOLVED, ERROR
  data: any, // data which is set in the reducer
}
`;

export const MANAGE_TEMPLATE_CODE2 = `
<div [ngrxView]="userInfo.state">
  <div *ngrxViewResolving>Loading...</div>
  <div *ngrxViewError>Error fetching user info</div>
  <div *ngrxViewResolved>
    {{userInfo.data | json}}
  </div>
</div>
`;
