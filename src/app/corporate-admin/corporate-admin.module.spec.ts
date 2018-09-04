import { CorporateAdminModule } from './corporate-admin.module';

describe('CorporateAdminModule', () => {
  let corporateAdminModule: CorporateAdminModule;

  beforeEach(() => {
    corporateAdminModule = new CorporateAdminModule();
  });

  it('should create an instance', () => {
    expect(corporateAdminModule).toBeTruthy();
  });
});
