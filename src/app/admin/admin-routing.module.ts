import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { CorporateRegistrationComponent } from './corporate-registration/corporate-registration.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TemplateComponent } from './template/template.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';


const routes: Routes = [
	{
		path: 'superAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'collegeReg', component: CollegeRegistrationComponent},
		  {path: 'corporateReg', component: CorporateRegistrationComponent},
		  {path: 'collegeList', component: CollegeListComponent},
		  {path: 'corporateList', component: CorporateListComponent},
		  {path: 'pendingApproval', component: PendingApprovalComponent},
		  {path: 'studentReg', component: StudentRegistrationComponent},
		  {path: 'studentList', component: StudentListComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
