import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-schedule-result',
  templateUrl: './test-schedule-result.component.html',
  styleUrls: ['./test-schedule-result.component.css']
})
export class TestScheduleResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getGridData();
  }
  status:any;
  displayedColumns: string[] = ['assignedBy', 'testName', 'category', 'testType', 'noofQuestions', 'duration', 'startDate', 'endDate', 'negMark', 'action', 'instruction', 'status', 'completeDate', 'result'];
  dataSource: any = [{ assignedBy: "Talent", testName: "Core", category: "Highland", testType: "pre-exam", noofQuestions:"50", duration:"3hrs", startDate: "07-08-2018", endDate:"08-08-2018",negMark:"yes", reason:"Yes it not yet done", status:"In progress", completeDate:"08-08-2018", result:"passed"}]
  getGridData() {
    // this._iService.getAllOffers().subscribe(response => {
    //   let ELEMENT_DATA = response.payload.joblist;
    //   this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
    // })

  }
}
