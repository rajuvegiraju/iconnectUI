import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-training',
  templateUrl: './student-training.component.html',
  styleUrls: ['./student-training.component.css']
})
export class StudentTrainingComponent implements OnInit {

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
