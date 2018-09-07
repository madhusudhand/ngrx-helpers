import { HttpMethod } from './http-method.enum';

export interface EffectConfig {
  action: string;
  type: HttpMethod;
  endpoint: string;
  requestHeaders?: any;
}
