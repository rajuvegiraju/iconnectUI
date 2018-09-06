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

@NgModule({
  imports: [
    CommonModule,
    PlacementOfficerRoutingModule
  ],
  declarations: [StudentListComponent, TemplateComponent, AddStudentComponent, PendingApprovalComponent, IntenshipComponent, AvailablejobsComponent, TrainingsComponent, InterviewSchedulesComponent, ViewStudentsComponent, ProfileComponent]
})
export class PlacementOfficerModule { }
