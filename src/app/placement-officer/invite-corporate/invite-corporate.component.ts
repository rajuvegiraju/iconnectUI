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
  compId: any;
  companyNames: any = [{
    name: 'Mahindra', value: 'mahi'
  }]
  constructor(private _snackBar: SnackbarService, private _iconnectService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this._iconnectService.getLocationDetails().subscribe(response => {
         this.locationList = response.payload.locations;
       })
  }

  sendNotification(status) {
    let payload = {
      compId: this.compId,
      description: this.description
    }
    this._iconnectService.sendNotification(payload).subscribe(response => {
      if(response){
        this._snackBar.success("Successfully sent notification");
      }else{
        this._snackBar.error("Notification unsuccessful");

      }
    })
  }



}
