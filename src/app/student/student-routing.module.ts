import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { TrainingComponent } from './training/training.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';


const routes: Routes = [
	{
		path: 'student',
		component: TemplateComponent,
		children: [
		  {path: 'dashboard', component: DashboardComponent},
		  {path: 'joboffers', component: JobOffersComponent},
      {path: 'onlinetest', component: OnlineTestComponent},
		  {path: 'scheduled-interview', component: ScheduledInterviewsComponent},
		  {path: 'training', component: TrainingComponent},
		  {path: 'view-companies', component: ViewCompaniesComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
