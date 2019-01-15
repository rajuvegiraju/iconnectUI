import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTrainingComponent } from './internal-training.component';

describe('InternalTrainingComponent', () => {
  let component: InternalTrainingComponent;
  let fixture: ComponentFixture<InternalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
