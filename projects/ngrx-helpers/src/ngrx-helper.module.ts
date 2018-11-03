import { NgModule, ModuleWithProviders } from '@angular/core';
import { HELPER_CONFIG } from './tokens';
import { NgrxHelperService } from './ngrx-helper.service';
import { NgrxViewDirective } from './directives/view.directive';
import { NgrxViewResolvingDirective } from './directives/view-resolving.directive';
import { NgrxViewResolvedDirective } from './directives/view-resolved.directive';
import { NgrxViewErrorDirective } from './directives/view-error.directive';
import { NgrxViewEmptyDirective } from './directives/view-empty.directive';
import { NgrxViewInvalidDirective } from './directives/view-invalid.directive';

@NgModule({
  // imports: [,
    // HttpClientModule,
  // ],
  declarations: [
    NgrxViewDirective,
    NgrxViewResolvingDirective,
    NgrxViewResolvedDirective,
    NgrxViewErrorDirective,
    NgrxViewEmptyDirective,
    NgrxViewInvalidDirective,
  ],
  exports: [
    NgrxViewDirective,
    NgrxViewResolvingDirective,
    NgrxViewResolvedDirective,
    NgrxViewErrorDirective,
    NgrxViewEmptyDirective,
    NgrxViewInvalidDirective,
  ],
})
export class NgrxHelperModule {
  static forRoot(
    config?: any,
  ): ModuleWithProviders {
    return {
      ngModule: NgrxHelperModule,
      providers: [NgrxHelperService, { provide: HELPER_CONFIG, useValue: config }]
    };
  }
}
