import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'website', 'industry', 'location'];
  dataSource: any = [];

  constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.navMessage.subscribe(message => {
      this._iService.collegeList().subscribe(response => {
        let ELEMENT_DATA = response.payload.college;
        this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
      })
    });
  }

}
