import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';
export interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  displayedColumns: string[] = ['jobId', 'status', 'companyName', 'role', 'noofPositions', 'skill', 'percentage', 'salary', 'location', 'industry', 'action'];
  dataSource: any = [];
  editData: any;
  search:any;
  dashMessage: String;
  filters: Filter[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'open', viewValue: 'Open' },
    { value: 'closed', viewValue: 'Closed' }
  ];

  constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = "jobOffers";
      this._iService.collegeList().subscribe(response => {
        let ELEMENT_DATA = response.payload.college;
        this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
      })
    });
  }
}
