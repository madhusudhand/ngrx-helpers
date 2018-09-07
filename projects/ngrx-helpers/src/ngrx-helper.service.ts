import { Injectable, Inject } from '@angular/core';

@Injectable()
export class NgrxHelperService {
  constructor(
    @Inject('config') private config: any
  ) {
    console.log('this is from service', this.config);
  }

  test() {
    console.log('service test method', this.config);
  }
}
