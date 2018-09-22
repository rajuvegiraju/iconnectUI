import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { CollegeListComponent } from './college-list/college-list.component';

const routes: Routes = [
	{
		path: 'collegeAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'addCollege', component: AddCollegeComponent},
      {path: 'addCollege/:id', component: AddCollegeComponent},
      {path: 'collegeList', component: CollegeListComponent}
		]
	},
	{ path: '', redirectTo: '/collegeAdmin',pathMatch: 'full'}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeAdminRoutingModule { }
