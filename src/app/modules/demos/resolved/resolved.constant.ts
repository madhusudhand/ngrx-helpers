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
    <div
      *ngrxViewResolved
      class="full-height">
      <div class="d-flex justify-content-center align-items-center full-height">
        <div
          class="card"
          style="width: 20rem;">
          <div class="card-body">
            <h3 class="card-title">GitHu Repo Info</h3>
            <div class="card-text">
              <div>Username: {{userInfo.data.name}}</div>
              <div>Followers: {{userInfo.data.followers}}</div>
              <div>Following: {{userInfo.data.following}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      *ngrxViewError
      class="full-height d-flex align-items-center justify-content-center">
      <div
        class="alert alert-danger"
        role="alert">
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
@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
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
      type: APP_ACTIONS.GET_USER,
      payload: {
        pathParams: ['octocat'],
        // queryParams: [{ name: 'value' }],
      },
    });
  }

}
`;
