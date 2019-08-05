import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../../../_store/actions';
import { NgrxStoreSubscription, DATA_STATE } from 'ngrx-helpers';
import { HTML_CODE, TS_CODE } from './error.constant';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends NgrxStoreSubscription implements OnInit {

  userInfo: any;
  demoCode = {
    HTML: HTML_CODE,
    TS: TS_CODE
  };

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
      this.userInfo = Object.assign({}, data);
      this.userInfo.state = DATA_STATE.ERROR;
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
