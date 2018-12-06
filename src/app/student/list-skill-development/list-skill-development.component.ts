import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-skill-development',
  templateUrl: './list-skill-development.component.html',
  styleUrls: ['./list-skill-development.component.css']
})
export class ListSkillDevelopmentComponent implements OnInit {

  displayedColumns: string[] = ['industry', 'skillDevelopment', 'lesson', 'noofunits', 'duration', 'status'];
  dataSource: any = [{ industry: "software", skillDevelopment: "student", lesson: "DASA Process", noofunits: "330", duration: "5hrs"}]
  
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
