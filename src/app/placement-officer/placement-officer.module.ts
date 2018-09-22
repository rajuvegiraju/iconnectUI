import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementOfficerRoutingModule } from './placement-officer-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { TemplateComponent } from './template/template.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { IntenshipComponent } from './intenship/intenship.component';
import { AvailablejobsComponent } from './availablejobs/availablejobs.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { InterviewSchedulesComponent } from './interview-schedules/interview-schedules.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentBulkComponent } from './add-student-bulk/add-student-bulk.component';

@NgModule({
  imports: [
    CommonModule,
    PlacementOfficerRoutingModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [StudentListComponent, TemplateComponent, AddStudentComponent, PendingApprovalComponent, IntenshipComponent, AvailablejobsComponent, TrainingsComponent, InterviewSchedulesComponent, ViewStudentsComponent, ProfileComponent, AddStudentBulkComponent]
})
export class PlacementOfficerModule { }
