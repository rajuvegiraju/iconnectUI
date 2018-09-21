import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddjdComponent } from './addjd/addjd.component';
import { TemplateComponent } from './template/template.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { InternshipComponent } from './internship/internship.component';
import { InterviewSchedulesComponent } from './interview-schedules/interview-schedules.component';
import { ProfileComponent } from './profile/profile.component';
import { AddInternshipComponent } from './add-internship/add-internship.component';

const routes: Routes = [
	{
		path: 'hr',
		component: TemplateComponent,
		children: [
		  {path: 'addjd', component: AddjdComponent},
      {path: 'all-jobs', component: AllJobsComponent},
      {path: 'internship', component: InternshipComponent},
      {path: 'interview-schedules', component: InterviewSchedulesComponent},
      {path: 'add-internship', component: AddInternshipComponent},
      {path: 'profile', component: ProfileComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
