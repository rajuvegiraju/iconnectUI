import { CollegeAdminModule } from './college-admin.module';

describe('CollegeAdminModule', () => {
  let collegeAdminModule: CollegeAdminModule;

  beforeEach(() => {
    collegeAdminModule = new CollegeAdminModule();
  });

  it('should create an instance', () => {
    expect(collegeAdminModule).toBeTruthy();
  });
});
