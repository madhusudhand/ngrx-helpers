import { DemosModule } from './demos.module';

describe('DemosModule', () => {
  let demosModule: DemosModule;

  beforeEach(() => {
    demosModule = new DemosModule();
  });

  it('should create an instance', () => {
    expect(demosModule).toBeTruthy();
  });
});
