import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Directive({
  selector: '[ngViewResolved]'
})
export class NgViewResolvedDirective {
  private _hasView = false;
  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<Object>,

  ) { }

  @Input()
  set ngViewResolved(condition) {
    if (!this.viewRef) {
      return;
    }

    if (condition && !this._hasView) {
      this.viewRef.createEmbeddedView(this.templateRef);
      this._hasView = true;

    } else if (!condition && this._hasView) {
      this.viewRef.clear();
      this._hasView = false;
    }
  }
}
