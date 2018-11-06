import { ContentChildren, Directive, Input, QueryList, AfterViewInit } from '@angular/core';
import { DATA_STATE } from '../enums/data-state.enum';
import { NgrxViewResolvingDirective } from './view-resolving.directive';
import { NgrxViewResolvedDirective } from './view-resolved.directive';
import { NgrxViewErrorDirective } from './view-error.directive';
import { NgrxViewEmptyDirective } from './view-empty.directive';
import { NgrxViewInvalidDirective } from './view-invalid.directive';

@Directive({
  selector: '[ngrxView]'
})
export class NgrxViewDirective implements AfterViewInit {
  @ContentChildren(NgrxViewResolvingDirective) resolving: QueryList<NgrxViewResolvingDirective>;
  @ContentChildren(NgrxViewErrorDirective) error: QueryList<NgrxViewErrorDirective>;
  @ContentChildren(NgrxViewResolvedDirective) resolved: QueryList<NgrxViewResolvedDirective>;
  @ContentChildren(NgrxViewEmptyDirective) empty: QueryList<NgrxViewEmptyDirective>;
  @ContentChildren(NgrxViewInvalidDirective) invalid: QueryList<NgrxViewInvalidDirective>;

  constructor() { }

  private viewState: DATA_STATE = DATA_STATE.INITIAL;

  @Input()
  set ngrxView(viewState) {
    this.viewState = viewState;
    this.setViewState();
  }

  ngAfterViewInit() {
    this.setViewState();
  }

  private setViewState() {
    setTimeout(() => {
      this.setResolving(this.viewState);
      this.setError(this.viewState);
      this.setResolved(this.viewState);
      this.setEmpty(this.viewState);
      this.setInvalid(this.viewState);
    }, 0);
  }

  private setResolving(viewState) {
    if (this.resolving) {
      this.resolving.forEach(l => {
        l.ngrxViewResolving = viewState === DATA_STATE.RESOLVING;
      });
    }
  }

  private setError(viewState) {
    if (this.error) {
      this.error.forEach(e => {
        e.ngrxViewError = viewState === DATA_STATE.ERROR;
      });
    }
  }

  private setResolved(viewState) {
    if (this.resolved) {
      this.resolved.forEach(c => {
        c.ngrxViewResolved = viewState === DATA_STATE.RESOLVED;
      });
    }
  }

  private setEmpty(viewState) {
    if (this.empty) {
      this.empty.forEach(f => {
        f.ngrxViewEmpty = viewState === DATA_STATE.EMPTY;
      });
    }
  }

  private setInvalid(viewState) {
    if (this.invalid) {
      this.invalid.forEach(f => {
        f.ngrxViewInvalid = viewState === DATA_STATE.INVALID;
      });
    }
  }
}
