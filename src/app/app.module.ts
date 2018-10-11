import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeAdminModule } from './college-admin/college-admin.module';
import { CorporateAdminModule } from './corporate-admin/corporate-admin.module';
import { AdminModule } from './admin/admin.module';
import { PlacementOfficerModule } from './placement-officer/placement-officer.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthModule } from './auth/auth.module';
import { CorporateModule } from './corporate/corporate.module';
import { StudentModule } from './student/student.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IconnectService } from './iconnect.service';
import { DataService } from './datachange.service';
import { SnackbarService } from './snackbar.service';
import { HttpServiceInterceptor } from './http.service';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FileUploader,FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    //FileSelectDirective,
    // FileUploader,
	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //FileUploadModule,
    AppRoutingModule,
	  CollegeAdminModule,
    CorporateAdminModule,
    PlacementOfficerModule,
	  AdminModule,
    StudentModule,
    AuthModule,
    CorporateModule,
	  MaterialModule,
	  HttpClientModule,
    BrowserAnimationsModule,
	  BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, AdminModule, PlacementOfficerModule, CorporateModule],
  providers:[IconnectService,DataService,SnackbarService,{provide: HTTP_INTERCEPTORS,
  useClass: HttpServiceInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
