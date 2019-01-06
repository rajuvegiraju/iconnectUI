import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getGridData();
  }
  status:any;
  dropdownList: any = ['Yet to start', 'In Progress', 'Completed'];
  displayedColumns: string[] = ['title', 'description', 'institution', 'trainer', 'duration', 'startDate', 'endDate', 'action', 'reason', 'status'];
  dataSource: any = [{ title: "Java", description: "Core", institution: "Highland Institution", trainer: "Naresh", duration:"12hrs", startDate: "07-08-2018", endDate:"08-08-2018",action:"Do not", reason:"Yes it not yet done", status:"In progress"}]
  getGridData() {
    // this._iService.getAllOffers().subscribe(response => {
    //   let ELEMENT_DATA = response.payload.joblist;
    //   this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
    // })

  }

}
