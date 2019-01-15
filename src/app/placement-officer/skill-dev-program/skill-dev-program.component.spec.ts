import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDevProgramComponent } from './skill-dev-program.component';

describe('SkillDevProgramComponent', () => {
  let component: SkillDevProgramComponent;
  let fixture: ComponentFixture<SkillDevProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDevProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDevProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
