import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkillDevelopmentComponent } from './list-skill-development.component';

describe('ListSkillDevelopmentComponent', () => {
  let component: ListSkillDevelopmentComponent;
  let fixture: ComponentFixture<ListSkillDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSkillDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkillDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
