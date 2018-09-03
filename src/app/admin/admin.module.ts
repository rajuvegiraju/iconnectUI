import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { CorporateRegistrationComponent } from './corporate-registration/corporate-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TemplateComponent } from './template/template.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MaterialModule } from '../material.module';
import { IconnectService } from '../iconnect.service';
import { DataService } from '../datachange.service';
import { SnackbarService } from '../snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
	  MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers:[IconnectService,DataService,SnackbarService],
  exports: [CollegeRegistrationComponent, CorporateRegistrationComponent, TemplateComponent, PendingApprovalComponent, CollegeListComponent, CorporateListComponent, StudentListComponent,StudentRegistrationComponent],
  declarations: [CollegeRegistrationComponent, CorporateRegistrationComponent, TemplateComponent, PendingApprovalComponent, CollegeListComponent, CorporateListComponent, StudentListComponent,StudentRegistrationComponent]
})
export class AdminModule { }
