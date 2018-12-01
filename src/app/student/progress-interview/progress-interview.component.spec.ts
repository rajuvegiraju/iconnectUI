import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInterviewComponent } from './progress-interview.component';

describe('ProgressInterviewComponent', () => {
  let component: ProgressInterviewComponent;
  let fixture: ComponentFixture<ProgressInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
