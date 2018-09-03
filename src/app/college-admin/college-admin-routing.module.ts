import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AddCollegeComponent } from './add-college/add-college.component';

const routes: Routes = [
	{
		path: 'collegeAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'addCollege', component: AddCollegeComponent}
		]
	},
	{ path: '', redirectTo: '/collegeAdmin',pathMatch: 'full'}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeAdminRoutingModule { }
