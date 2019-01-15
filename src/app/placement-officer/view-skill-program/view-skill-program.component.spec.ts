import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSkillProgramComponent } from './view-skill-program.component';

describe('ViewSkillProgramComponent', () => {
  let component: ViewSkillProgramComponent;
  let fixture: ComponentFixture<ViewSkillProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSkillProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSkillProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
