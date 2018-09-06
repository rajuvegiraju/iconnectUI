import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntenshipComponent } from './intenship.component';

describe('IntenshipComponent', () => {
  let component: IntenshipComponent;
  let fixture: ComponentFixture<IntenshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntenshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
