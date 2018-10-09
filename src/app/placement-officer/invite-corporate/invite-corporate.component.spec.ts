import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCorporateComponent } from './invite-corporate.component';

describe('InviteCorporateComponent', () => {
  let component: InviteCorporateComponent;
  let fixture: ComponentFixture<InviteCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
