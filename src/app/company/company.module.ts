import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AddComanyComponent } from './add-comany/add-comany.component';
import { ComanyListComponent } from './comany-list/comany-list.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [AddComanyComponent, ComanyListComponent]
})
export class CompanyModule { }
