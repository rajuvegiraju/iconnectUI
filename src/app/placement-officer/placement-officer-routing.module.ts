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
import { NotifyAdminComponent } from './notify-admin/notify-admin.component';
import { InternalTrainingComponent } from './internal-training/internal-training.component';
import { SkillDevProgramComponent } from './skill-dev-program/skill-dev-program.component';
import { ViewSkillProgramComponent } from './view-skill-program/view-skill-program.component';
import { SkillAssignmentComponent } from './skill-assignment/skill-assignment.component';
import { SkillGapComponent } from './skill-gap/skill-gap.component';


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
      {path: 'notify-admin', component: NotifyAdminComponent},
      {path: 'internalTraining', component: InternalTrainingComponent},
      {path: 'skillDev', component: SkillDevProgramComponent},
      {path: 'viewSkill', component: ViewSkillProgramComponent},
      {path: 'skillAssign', component: SkillAssignmentComponent},
      {path: 'skillGap', component: SkillGapComponent},
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementOfficerRoutingModule { }
