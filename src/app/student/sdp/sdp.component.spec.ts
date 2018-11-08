import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdpComponent } from './sdp.component';

describe('SdpComponent', () => {
  let component: SdpComponent;
  let fixture: ComponentFixture<SdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
