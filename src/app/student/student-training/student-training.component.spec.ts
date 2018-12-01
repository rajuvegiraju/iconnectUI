import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrainingComponent } from './student-training.component';

describe('StudentTrainingComponent', () => {
  let component: StudentTrainingComponent;
  let fixture: ComponentFixture<StudentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
