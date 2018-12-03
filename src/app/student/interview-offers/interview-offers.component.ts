import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-offers',
  templateUrl: './interview-offers.component.html',
  styleUrls: ['./interview-offers.component.css']
})
export class InterviewOffersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getGridData();
  }
  displayedColumns: string[] = ['name', 'role', 'location', 'salary', 'offer', 'doj'];
  dataSource: any = [{ name: "dell", role: "student", location: "Bangalore", salary: "80k", offer:"Yes", doj: "07-08-2018"}]
  getGridData() {
    // this._iService.getAllOffers().subscribe(response => {
    //   let ELEMENT_DATA = response.payload.joblist;
    //   this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
    // })

  }
}
