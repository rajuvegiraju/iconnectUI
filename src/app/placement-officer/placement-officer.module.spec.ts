import { PlacementOfficerModule } from './placement-officer.module';

describe('PlacementOfficerModule', () => {
  let placementOfficerModule: PlacementOfficerModule;

  beforeEach(() => {
    placementOfficerModule = new PlacementOfficerModule();
  });

  it('should create an instance', () => {
    expect(placementOfficerModule).toBeTruthy();
  });
});
