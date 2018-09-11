import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjdComponent } from './addjd.component';

describe('AddjdComponent', () => {
  let component: AddjdComponent;
  let fixture: ComponentFixture<AddjdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
