import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-availablejobs',
  templateUrl: './availablejobs.component.html',
  styleUrls: ['./availablejobs.component.css']
})
export class AvailablejobsComponent implements OnInit {

  displayedColumns: string[] = ['jobId', 'status', 'corporateName', 'jobPosition', 'skill', 'percentage', 'duration', 'salary', 'location', 'industry', 'eligibleStudents'];
    dataSource: any; 
    editData: any;
    dashMessage: String;
    search: any;
    filters = [
        { value: 'all', viewValue: 'All' },
        { value: 'open', viewValue: 'Open' },
        { value: 'closed', viewValue: 'Closed'}
    ];

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "Available Jobs";
            this._iService.getAllJobsPO().subscribe(response => {
                let ELEMENT_DATA = response.payload.joblist;
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
