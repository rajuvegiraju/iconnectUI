import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaangepasswordComponent } from './chaangepassword.component';

describe('ChaangepasswordComponent', () => {
  let component: ChaangepasswordComponent;
  let fixture: ComponentFixture<ChaangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
