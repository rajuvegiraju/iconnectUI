import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../../datachange.service';
import { SnackbarService } from '../../snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notify-admin',
  templateUrl: './notify-admin.component.html',
  styleUrls: ['./notify-admin.component.css']
})
export class NotifyAdminComponent implements OnInit {

  company = {'companyName':'',
              'hrName':'',
              'hrMobile':'',
              'hrEmail':'',
              'description':''};
  
  description: any;
  
  
  constructor(private _snackBar: SnackbarService, private _iconnectService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    
  }


  
  sendNotification() {
    
    this._iconnectService.sendNotifyAdmin(this.company).subscribe(response => {
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
