import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from './_store/actions';
import { NgrxSubscription } from 'projects/ngrx-helpers/src/store/ngrx-subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends NgrxSubscription implements OnInit {
  title = 'ngrx-helpers-app';
  userInfo = {};

  constructor(
    private store: Store<any>,
  ) {
    super(store);
  }

  ngOnInit() {
    this.getState({
      feature: 'APP',
      reducer: 'USER_REDUCER',
      state: 'userInfo',
    }).subscribe((data) => {
      // this.userInfo = data;
      console.log(data);
    });

    this.store.dispatch({
      type: APP_ACTIONS.GET_USER
    });
  }
}
