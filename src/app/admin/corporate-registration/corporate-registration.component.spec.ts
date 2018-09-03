import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRegistrationComponent } from './corporate-registration.component';

describe('CorporateRegistrationComponent', () => {
  let component: CorporateRegistrationComponent;
  let fixture: ComponentFixture<CorporateRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
