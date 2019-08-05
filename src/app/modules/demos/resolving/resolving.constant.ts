export const HTML_CODE = `
<div
    [ngrxView]="userInfo.state"
    class="full-height">
    <div
      *ngrxViewResolving
      class="full-height">
      <div class="d-flex justify-content-center align-items-center full-height">
        <div
          class="spinner-border"
          role="status">
        </div>
      </div>
    </div>
  </div>
`;

export const TS_CODE = `
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../../../_store/actions';
import { NgrxStoreSubscription } from 'ngrx-helpers';
@Component({
  selector: 'app-resolving',
  templateUrl: './resolving.component.html',
  styleUrls: ['./resolving.component.scss']
})
export class ResolvingComponent  extends NgrxStoreSubscription implements OnInit {
  userInfo = {};
  constructor(
    private store: Store<any>,
  ) {
    super(store);
  }

  ngOnInit() {
    super.getState({
      feature: 'APP',
      reducer: 'USER_REDUCER',
      state: 'userInfo',
    }).subscribe((data) => {
      this.userInfo = data;
    });

    this.store.dispatch({
      type: APP_ACTIONS.GET_USER_RESOLVING,
      payload: {
        pathParams: ['octocat'],
        // queryParams: [{ name: 'value' }],
      },
    });
  }

}
`;
