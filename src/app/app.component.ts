import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from './_store/actions';
import { NgrxStoreSubscription } from 'ngrx-helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NgrxStoreSubscription implements OnInit {
  title = 'ngrx-helpers-demo';
  userInfo = {};

 menu = [
    {
        name: 'Documentation',
    },
    {
        name: 'Demos',
    }
];


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
