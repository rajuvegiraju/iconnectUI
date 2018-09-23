import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentBulkComponent } from './add-student-bulk.component';

describe('AddStudentBulkComponent', () => {
  let component: AddStudentBulkComponent;
  let fixture: ComponentFixture<AddStudentBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentBulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
