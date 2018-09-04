import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateAdminRoutingModule } from './corporate-admin-routing.module';
import { AddCorporateComponent } from './add-corporate/add-corporate.component';
import { CorporateListComponent } from './corporate-list/corporate-list.component';
import { TemplateComponent } from './template/template.component';

import { MaterialModule } from '../material.module';
import { IconnectService } from '../iconnect.service';
import { DataService } from '../datachange.service';
import { SnackbarService } from '../snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CorporateAdminRoutingModule,
    MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers:[IconnectService,DataService,SnackbarService],
  exports: [TemplateComponent, AddCorporateComponent, CorporateListComponent],
  declarations: [TemplateComponent, AddCorporateComponent, CorporateListComponent]
  
})
export class CorporateAdminModule { }
