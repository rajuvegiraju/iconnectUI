import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../../datachange.service';
import { SnackbarService } from '../../snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-corporate',
  templateUrl: './invite-corporate.component.html',
  styleUrls: ['./invite-corporate.component.css']
})
export class InviteCorporateComponent implements OnInit {
  companyName: any;
  notifyAdmin: any;
  description: any;
  locationList: any;
  companyList: any;
  company: any;
  location: any;
  hrName:any='';
  hrMobile:any='';
  hrEmail:any='';

  
  constructor(private _snackBar: SnackbarService, private _iconnectService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this._iconnectService.getLocationDetails().subscribe(response => {
    debugger;
      this.locationList = response.payload.locations;
    })
  }


  changLocation(location) {
    this._iconnectService.getCompineDetails(location.locationId).subscribe(response => {
      this.companyList = response.payload.company;
    })
  }

  changCompany(company) {
  this.company = company,
    this.hrEmail = company.email,
    this.hrMobile = company.mobile,
    this.hrName = company.name
  }


  sendNotification(status) {
    let payload = {
      hrName: this.company.name,
      hrMobile: this.company.mobile,
      hrEmail: this.company.email,
      description:this.description,
      companyName:this.company.corporateName,
      companyId : this.company.id
    }
    this._iconnectService.sendNotification(payload).subscribe(response => {
      if (response) {
        this._snackBar.success("Successfully sent notification");
      } else {
        this._snackBar.error("Notification unsuccessful");

      }
    })
  }

  inviteCorporate() {
  }

}
