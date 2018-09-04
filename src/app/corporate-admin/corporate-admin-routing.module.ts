import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AddCorporateComponent } from './add-corporate/add-corporate.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';

const routes: Routes = [
	{
		path: 'corporateAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'addCorporate', component: AddCorporateComponent},
      {path: 'corporateList', component: CorporateListComponent}
		]
	},
	{ path: '', redirectTo: '/corporateAdmin',pathMatch: 'full'}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateAdminRoutingModule { }
