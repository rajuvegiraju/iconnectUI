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

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [TemplateComponent, DashboardComponent, TrainingComponent, JobOffersComponent, ViewCompaniesComponent, ScheduledInterviewsComponent, OnlineTestComponent]
})
export class StudentModule { }
