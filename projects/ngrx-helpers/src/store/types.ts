import { DATA_STATE } from '../enums/data-state.enum';

export interface NgrxAny {
  state: DATA_STATE;
  data: any;
  error?: any;
}

export interface NgrxObject<T> extends NgrxAny {
  data: T & object;
}

export interface NgrxArray<T> extends NgrxAny {
  data: T[];
}

export interface NgrxString extends NgrxAny {
  data: string;
}

export interface NgrxNumber extends NgrxAny {
  data: number;
}

export interface NgrxBoolean extends NgrxAny {
  data: boolean;
}
