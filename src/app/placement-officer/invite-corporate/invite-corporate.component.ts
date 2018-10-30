import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { SnackbarService } from '../../snackbar.service';
@Component({
  selector: 'app-invite-corporate',
  templateUrl: './invite-corporate.component.html',
  styleUrls: ['./invite-corporate.component.css']
})
export class InviteCorporateComponent implements OnInit {
  companyName: any;
  notifyAdmin: any;
  description: any;
  compId: any;
  companyNames: any = [{
    name: 'Mahindra', value: 'mahi'
  }]
  constructor(private _iService: IconnectService, private _snackBar:SnackbarService) { }

  ngOnInit() {
  }

  sendNotification(status) {
    let payload = {
      compId: this.compId,
      description: this.description
    }
    this._iService.sendNotification(payload).subscribe(response => {
      if(response){
        this._snackBar.success("Successfully sent notification");
      }else{
        this._snackBar.error("Notification unsuccessful");

      }
    })
  }

}
