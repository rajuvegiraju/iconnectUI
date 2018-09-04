import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { IconnectService } from '../iconnect.service';
import { DataService } from '../datachange.service';
import { SnackbarService } from '../snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { TemplateComponent } from './template/template.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { CollegeListComponent } from './college-list/college-list.component';

@NgModule({
  imports: [
    CommonModule,
    CollegeAdminRoutingModule,
    MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers:[IconnectService,DataService,SnackbarService],
  exports: [TemplateComponent, AddCollegeComponent, CollegeListComponent],
  declarations: [TemplateComponent, AddCollegeComponent, CollegeListComponent]
})
export class CollegeAdminModule { }
