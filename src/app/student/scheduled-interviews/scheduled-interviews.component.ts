import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.css']
})
export class ScheduledInterviewsComponent implements OnInit {

  displayedColumns: string[] = ['studentId', 'corporateName', 'role', 'round', 'time', 'venue', 'contactPerson', 'mobileNumber', 'emailId'];
  dataSource: any = [{ studentId: "5347843", corporateName: "dell", role: "student", round: "AASAAN Process", time: "3.30pm", venue: "Bangalore", contactPerson: "Chetan", mobileNumber: "9988877879", emailId: "bangalore" },
  { studentId: "74327243", corporateName: "HP", role: "student", round: "FFPPPP", time: "4.30pm", venue: "Hyderabad", contactPerson: "Prasad", mobileNumber: "9988877879", emailId: "Bengalore" }]
  courceList: any = [];
  modeOfInterviewList: any = [];
  editData: any;
  date: string;
  dashMessage: String;

  constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getGridData();
  }
  getGridData() {
    // this._iService.getStdInterviews().subscribe(response => {
    //   let ELEMENT_DATA = response.payload.joblist;
    //   this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
    // })

  }

}
