import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../../../_store/actions';
import { NgrxStoreSubscription, DATA_STATE } from 'ngrx-helpers';
import { HTML_CODE, TS_CODE } from './resolving.constant';
@Component({
  selector: 'app-resolving',
  templateUrl: './resolving.component.html',
  styleUrls: ['./resolving.component.scss']
})
export class ResolvingComponent extends NgrxStoreSubscription implements OnInit {
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
      this.userInfo.state = DATA_STATE.RESOLVING;
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
