import { HttpMethod } from './http-method.enum';

export interface NgrxEffectConfig {
  action: string;
  type: HttpMethod;
  endpoint: string;
  requestHeaders?: any;
}
