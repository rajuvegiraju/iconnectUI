import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCorporateComponent } from './approve-corporate.component';

describe('ApproveCorporateComponent', () => {
  let component: ApproveCorporateComponent;
  let fixture: ComponentFixture<ApproveCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
