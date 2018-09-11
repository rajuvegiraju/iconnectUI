import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddjdComponent } from './addjd/addjd.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
	{
		path: 'corporate',
		component: TemplateComponent,
		children: [
		  {path: 'addjd', component: AddjdComponent}
		]
	}
	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
