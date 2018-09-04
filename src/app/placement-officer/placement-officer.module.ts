import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementOfficerRoutingModule } from './placement-officer-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { TemplateComponent } from './template/template.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  imports: [
    CommonModule,
    PlacementOfficerRoutingModule
  ],
  declarations: [StudentListComponent, TemplateComponent, AddStudentComponent]
})
export class PlacementOfficerModule { }
