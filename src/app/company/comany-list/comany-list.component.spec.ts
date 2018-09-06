import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanyListComponent } from './comany-list.component';

describe('ComanyListComponent', () => {
  let component: ComanyListComponent;
  let fixture: ComponentFixture<ComanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
