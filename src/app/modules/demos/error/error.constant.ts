export const HTML_CODE = `
    <div
    [ngrxView]="userInfo.state"
    class="full-height">
    <div *ngrxViewError class="full-height d-flex align-items-center justify-content-center">
        <div class="alert alert-danger" role="alert">
            Error fetching user info
        </div>
    </div>
    </div>
`;

export const TS_CODE = `
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../../../_store/actions';
import { NgrxStoreSubscription } from 'ngrx-helpers';
import { HTML_CODE, TS_CODE } from './error.constant';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends NgrxStoreSubscription implements OnInit {

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
      type: APP_ACTIONS.GET_USER_ERROR,
      payload: {
        pathParams: ['octocat'],
        // queryParams: [{ name: 'value' }],
      },
    });
  }

}
`;
