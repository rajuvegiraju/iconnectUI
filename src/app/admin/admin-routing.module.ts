import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { CorporateRegistrationComponent } from './corporate-registration/corporate-registration.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';
import { TemplateComponent } from './template/template.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { ApproveCollegeComponent } from './approve-college/approve-college.component';
import { ApproveCorporateComponent } from './approve-corporate/approve-corporate.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ChaangepasswordComponent } from '../auth/chaangepassword/chaangepassword.component';
import { LoginComponent } from '../auth/login/login.component';


const routes: Routes = [
	{
		path: 'superAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'collegeReg', component: CollegeRegistrationComponent},
		  {path: 'corporateReg', component: CorporateRegistrationComponent},
      {path: 'collegeReg/:id', component: CollegeRegistrationComponent},
		  {path: 'corporateReg/:id', component: CorporateRegistrationComponent},
		  {path: 'collegeList', component: CollegeListComponent},
		  {path: 'corporateList', component: CorporateListComponent},
		  {path: 'pendingApproval', component: PendingApprovalComponent},
      {path: 'approveCollege/:id', component: ApproveCollegeComponent},
      { path: 'changePassword', component: ChaangepasswordComponent },
      {	path: 'login',	component: LoginComponent },
	  {path: 'approveCorporate/:id', component: ApproveCorporateComponent},
	  {path: 'studentList', component:StudentListComponent},
	  {path: 'studentReg', component:StudentRegistrationComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
