import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AddCorporateComponent } from './add-corporate/add-corporate.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';
import { ChaangepasswordComponent } from '../auth/chaangepassword/chaangepassword.component';

const routes: Routes = [
	{
		path: 'corporateAdmin',
		component: TemplateComponent,
		children: [
		  {path: 'addCorporate', component: AddCorporateComponent},
      {path: 'updateCorporate/:id', component: AddCorporateComponent},
      {path: 'corporateList', component: CorporateListComponent},
      {path: 'changePassword', component: ChaangepasswordComponent}
		]
	},
	{ path: '', redirectTo: '/corporateAdmin',pathMatch: 'full'}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateAdminRoutingModule { }
