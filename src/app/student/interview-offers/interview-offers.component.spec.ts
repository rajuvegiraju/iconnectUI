import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewOffersComponent } from './interview-offers.component';

describe('InterviewOffersComponent', () => {
  let component: InterviewOffersComponent;
  let fixture: ComponentFixture<InterviewOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
