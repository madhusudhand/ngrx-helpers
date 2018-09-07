import { Action } from '@ngrx/store';

export interface Payload {
  queryParams?:  object;
  pathParams?:   string[];
  body?:         any;
  data:          any;
}

export interface CustomAction extends Action {
  payload?: Payload;
}
