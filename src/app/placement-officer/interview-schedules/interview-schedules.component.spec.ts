import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSchedulesComponent } from './interview-schedules.component';

describe('InterviewSchedulesComponent', () => {
  let component: InterviewSchedulesComponent;
  let fixture: ComponentFixture<InterviewSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
