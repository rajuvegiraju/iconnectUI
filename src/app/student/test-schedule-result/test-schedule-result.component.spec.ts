import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScheduleResultComponent } from './test-schedule-result.component';

describe('TestScheduleResultComponent', () => {
  let component: TestScheduleResultComponent;
  let fixture: ComponentFixture<TestScheduleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScheduleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScheduleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
