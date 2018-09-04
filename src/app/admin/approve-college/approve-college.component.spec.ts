import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCollegeComponent } from './approve-college.component';

describe('ApproveCollegeComponent', () => {
  let component: ApproveCollegeComponent;
  let fixture: ComponentFixture<ApproveCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
