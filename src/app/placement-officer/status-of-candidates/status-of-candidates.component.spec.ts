import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfCandidatesComponent } from './status-of-candidates.component';

describe('StatusOfCandidatesComponent', () => {
  let component: StatusOfCandidatesComponent;
  let fixture: ComponentFixture<StatusOfCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusOfCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
