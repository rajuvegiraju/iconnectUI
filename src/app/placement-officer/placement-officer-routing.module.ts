import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { IntenshipComponent } from './intenship/intenship.component';
import { InterviewSchedulesComponent } from './interview-schedules/interview-schedules.component';
import { AvailablejobsComponent } from './availablejobs/availablejobs.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ProfileComponent } from './profile/profile.component';
import { AddStudentBulkComponent } from './add-student-bulk/add-student-bulk.component';
import { InternshipStatusComponent } from './internship-status/internship-status.component';

const routes: Routes = [
	{
		path: 'po',
		component: TemplateComponent,
		children: [
		  {path: 'addStudent', component: AddStudentComponent},
      {path: 'studentList', component: StudentListComponent},
      {path: 'pendingApproval', component: PendingApprovalComponent},
      {path: 'intenship', component: IntenshipComponent},
      {path: 'interviewSchedule', component: InterviewSchedulesComponent},
      {path: 'availableJobs', component: AvailablejobsComponent},
      {path: 'trainings', component: TrainingsComponent},
      {path: 'poProfile', component: ProfileComponent},
      {path: 'bulk-upload', component: AddStudentBulkComponent},
      {path: 'intern-status', component: InternshipStatusComponent},
      
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementOfficerRoutingModule { }
