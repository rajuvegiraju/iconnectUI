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
    selector: 'app-intenship-list',
    templateUrl: './intenship.component.html',
    styleUrls: ['./intenship.component.css']
})
export class IntenshipComponent implements OnInit {

    displayedColumns: string[] = ['internshipId', 'status', 'corporateName', 'projectTitle', 'skill', 'percentage', 'duration', 'stipend', 'location', 'industry', 'eligibleStudents'];
    dataSource: any; 
    editData: any;
    dashMessage: String;
    search: any;
    filters: Filter[] = [
        { value: 'all', viewValue: 'All' },
        { value: 'open', viewValue: 'Open' },
        { value: 'closed', viewValue: 'Closed' }
    ];

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "Internship";
            this._iService.getAllInternshipPO().subscribe(response => {
                let ELEMENT_DATA = response.payload.internshiplist;
                this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
            })
            /*
            if (this.dashMessage === 'Corporate') {
                this._iService.corporateList().subscribe(response => {
                    let ELEMENT_DATA = response.payload.corporate;
                    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
                })
            }*/
        });

    }
    
    deleteRow(row) {
        this.dataSource.data.splice(row.position - 1, 1);
        this.dataSource = new MatTableDataSource<any>(this.dataSource.data);

        this._iService.deleteCollege(row).subscribe(response => {
            console.log(response);
        })

		/*
		else if (this.dashMessage === 'Corporate') {
            this._iService.deleteCorporate(row).subscribe(response => {
                console.log(response);
            })
        }*/
    }
   
}
