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
import { InviteCorporateComponent } from './invite-corporate/invite-corporate.component';
import { ChaangepasswordComponent } from '../auth/chaangepassword/chaangepassword.component';
import { LoginComponent } from '../auth/login/login.component';
import { NotifyAdminComponent } from './notify-admin/notify-admin.component';




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
      {path: 'profile', component: ProfileComponent},
      {path: 'bulk-upload', component: AddStudentBulkComponent},
      {path: 'intern-status', component: InternshipStatusComponent},
      {path: 'invite-corporate', component: InviteCorporateComponent},
      {path: 'changePassword', component: ChaangepasswordComponent},
      {path: 'login',	component: LoginComponent },
      {path: 'notify-admin', component: NotifyAdminComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementOfficerRoutingModule { }
