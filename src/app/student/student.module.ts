import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingComponent } from './training/training.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { ProfileComponent } from './profile/profile.component';
import { InternshipComponent } from './internship/internship.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElearningComponent } from './elearning/elearning.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SdpComponent } from './sdp/sdp.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  declarations: [TemplateComponent, DashboardComponent, TrainingComponent, JobOffersComponent, ViewCompaniesComponent, ScheduledInterviewsComponent, OnlineTestComponent, ProfileComponent, InternshipComponent, ElearningComponent, AssessmentComponent, SdpComponent]
})
export class StudentModule { }
