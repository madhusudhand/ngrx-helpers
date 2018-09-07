import { NgModule, ModuleWithProviders } from '@angular/core';
import { HELPER_CONFIG } from './tokens';
import { NgrxHelperService } from './ngrx-helper.service';
import { NgViewDirective } from './directives/view.directive';
import { NgViewResolvingDirective } from './directives/view-resolving.directive';
import { NgViewResolvedDirective } from './directives/view-resolved.directive';
import { NgViewErrorDirective } from './directives/view-error.directive';
import { NgViewEmptyDirective } from './directives/view-empty.directive';
import { NgViewInvalidDirective } from './directives/view-invalid.directive';

@NgModule({
  // imports: [,
    // HttpClientModule,
  // ],
  declarations: [
    NgViewDirective,
    NgViewResolvingDirective,
    NgViewResolvedDirective,
    NgViewErrorDirective,
    NgViewEmptyDirective,
    NgViewInvalidDirective,
  ],
  exports: [
    NgViewDirective,
    NgViewResolvingDirective,
    NgViewResolvedDirective,
    NgViewErrorDirective,
    NgViewEmptyDirective,
    NgViewInvalidDirective,
  ],
})
export class NgrxHelperModule {
  static forRoot(
    config: any,
  ): ModuleWithProviders {
    return {
      ngModule: NgrxHelperModule,
      providers: [NgrxHelperService, { provide: HELPER_CONFIG, useValue: config }]
    };
  }
}
