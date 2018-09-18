import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { AddjdComponent } from './addjd/addjd.component';
import { TemplateComponent } from './template/template.component';


import { MaterialModule } from '../material.module';
import { IconnectService } from '../iconnect.service';
import { DataService } from '../datachange.service';
import { SnackbarService } from '../snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { InterviewSchedulesComponent } from './interview-schedules/interview-schedules.component';
import { InternshipComponent } from './internship/internship.component';
import { ProfileComponent } from './profile/profile.component';
import { AddInternshipComponent } from './add-internship/add-internship.component';


@NgModule({
  imports: [
    CommonModule,
    CorporateRoutingModule,
    MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers:[IconnectService,DataService,SnackbarService],
  exports: [AddjdComponent, TemplateComponent],
  declarations: [AddjdComponent, TemplateComponent, AllJobsComponent, InterviewSchedulesComponent, InternshipComponent, ProfileComponent, AddInternshipComponent]
})
export class CorporateModule { }
