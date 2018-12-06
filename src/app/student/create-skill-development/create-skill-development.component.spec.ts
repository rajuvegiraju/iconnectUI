import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillDevelopmentComponent } from './create-skill-development.component';

describe('CreateSkillDevelopmentComponent', () => {
  let component: CreateSkillDevelopmentComponent;
  let fixture: ComponentFixture<CreateSkillDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSkillDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkillDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
