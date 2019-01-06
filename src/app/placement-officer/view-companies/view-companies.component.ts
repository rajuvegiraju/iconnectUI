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
  dataSource: any = [{
    name:"Google", website:"www.google.com", industry:"Software", location:'California'
  },{
    name:"Microsoft", website:"www.microsoft.com", industry:"Software & Hardware", location:'Washington'
  },{
    name:"Amazon", website:"https://www.amazon.in", industry:"Ecommerce", location:'Seattle, Washington'
  }];

  constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.navMessage.subscribe(message => {
      // this._iService.getCompanyList().subscribe(response => {
      //   let ELEMENT_DATA = response.payload.companies;
      //   this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
      // })
    });
  }
}
