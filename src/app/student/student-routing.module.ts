import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { TrainingComponent } from './training/training.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';
import { ProfileComponent } from './profile/profile.component';
import { InternshipComponent } from './internship/internship.component';
import { ChaangepasswordComponent } from '../auth/chaangepassword/chaangepassword.component';
import { AssessmentComponent } from './assessment/AssessmentComponent.component';
import { ElearningComponent } from './elearning/ElearningComponent.component';
import { SdpComponent } from './sdp/SdpComponent.component';

const routes: Routes = [
	{
		path: 'student',
		component: TemplateComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'joboffers', component: JobOffersComponent },
			{ path: 'onlinetest', component: OnlineTestComponent },
			{ path: 'scheduled-interview', component: ScheduledInterviewsComponent },
			{ path: 'training', component: TrainingComponent },
			{ path: 'view-companies', component: ViewCompaniesComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'internship', component: InternshipComponent },
      { path: 'changePassword', component: ChaangepasswordComponent },
      { path: 'assessment', component: AssessmentComponent },
      { path: 'elearning', component: ElearningComponent },
      { path: 'sdp', component: SdpComponent }
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentRoutingModule { }
