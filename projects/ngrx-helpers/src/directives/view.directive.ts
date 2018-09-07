import { ContentChildren, Directive, Input, QueryList, AfterViewInit } from '@angular/core';
import { VIEW_STATE } from '../enums/view-state.enum';
import { NgViewResolvingDirective } from './view-resolving.directive';
import { NgViewResolvedDirective } from './view-resolved.directive';
import { NgViewErrorDirective } from './view-error.directive';
import { NgViewEmptyDirective } from './view-empty.directive';
import { NgViewInvalidDirective } from './view-invalid.directive';

@Directive({
  selector: '[ngView]'
})
export class NgViewDirective implements AfterViewInit {
  @ContentChildren(NgViewResolvingDirective) resolving: QueryList<NgViewResolvingDirective>;
  @ContentChildren(NgViewErrorDirective) error: QueryList<NgViewErrorDirective>;
  @ContentChildren(NgViewResolvedDirective) resolved: QueryList<NgViewResolvedDirective>;
  @ContentChildren(NgViewEmptyDirective) empty: QueryList<NgViewEmptyDirective>;
  @ContentChildren(NgViewInvalidDirective) invalid: QueryList<NgViewInvalidDirective>;

  constructor() { }

  private viewState: VIEW_STATE = VIEW_STATE.INITIAL;

  @Input()
  set ngView(viewState) {
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
        l.ngViewResolving = viewState === VIEW_STATE.RESOLVING;
      });
    }
  }

  private setError(viewState) {
    if (this.error) {
      this.error.forEach(e => {
        e.ngViewError = viewState === VIEW_STATE.ERROR;
      });
    }
  }

  private setResolved(viewState) {
    if (this.resolved) {
      this.resolved.forEach(c => {
        c.ngViewResolved = viewState === VIEW_STATE.RESOLVED;
      });
    }
  }

  private setEmpty(viewState) {
    if (this.empty) {
      this.empty.forEach(f => {
        f.ngViewEmpty = viewState === VIEW_STATE.EMPTY;
      });
    }
  }

  private setInvalid(viewState) {
    if (this.invalid) {
      this.invalid.forEach(f => {
        f.ngViewInvalid = viewState === VIEW_STATE.INVALID;
      });
    }
  }
}
