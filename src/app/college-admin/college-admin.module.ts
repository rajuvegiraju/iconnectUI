import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { TemplateComponent } from './template/template.component';
import { AddCollegeComponent } from './add-college/add-college.component';

@NgModule({
  imports: [
    CommonModule,
    CollegeAdminRoutingModule
  ],
  exports: [TemplateComponent, AddCollegeComponent],
  declarations: [TemplateComponent, AddCollegeComponent]
})
export class CollegeAdminModule { }
