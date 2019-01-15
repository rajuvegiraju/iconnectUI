import { Component, OnInit } from '@angular/core';
export interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-internal-training',
  templateUrl: './internal-training.component.html',
  styleUrls: ['./internal-training.component.css']
})
export class InternalTrainingComponent implements OnInit {
  displayedColumns: string[] = ['orgInstitute', 'trainName', 'emailId', 'mobileNo', 'title', 'startDate', 'endDate', 'duration', 'action', 'noofStudents', 'status'];
  dataSource: any = [{ orgInstitute: "5347843", trainName: "active", emailId: "dell", mobileNo: "AASAAN Process", title: "java", startDate: "50%", endDate: "3 months", duration: "10000", action: "bangalore", noofStudents: "Software", status:"active"},
  { orgInstitute: "74327243", trainName: "active", emailId: "HP", mobileNo: "FFPPPP", title: "JSP", startDate: "60%", endDate: "4months", duration: "38800", action: "Bengalore", noofStudents: "Software", status:"Inactive" }]
  editData: any;
  dashMessage: String;
  search: any;
  filters: Filter[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'open', viewValue: 'Open' },
    { value: 'closed', viewValue: 'Closed' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
