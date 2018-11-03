import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngrxViewEmpty]'
})
export class NgrxViewEmptyDirective {
  private _hasView = false;
  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<Object>,
  ) { }

  @Input()
  set ngViewEmpty(condition) {
    if (!this.viewRef) {
      return;
    }

    if (condition && !this._hasView) {
      this.viewRef.createEmbeddedView(this.templateRef);
      this._hasView = true;
    }  else if (!condition && this._hasView) {
      this.viewRef.clear();
      this._hasView = false;
    }
  }
}
