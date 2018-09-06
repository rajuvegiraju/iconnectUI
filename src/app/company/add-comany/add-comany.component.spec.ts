import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComanyComponent } from './add-comany.component';

describe('AddComanyComponent', () => {
  let component: AddComanyComponent;
  let fixture: ComponentFixture<AddComanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
