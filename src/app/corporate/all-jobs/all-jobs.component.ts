import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

    displayedColumns: string[] = ['jobPosition', 'jobType', 'cource', 'vacancies', 'status','date', 'action'];
    dataSource:any = [];
    editData: any;
    dashMessage: String;
    createJD: Boolean = false;
	
  constructor(private _iService: IconnectService, private dataService: DataService, private router:Router) { }

  ngOnInit() {
	  this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "College";
            this.createJD = true;
            
               this._iService.getAllJobs().subscribe(response => {
                    let ELEMENT_DATA = response.payload.joblist;
                    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
                })
        });
        
    }
    createOrg() {
        this.createJD = true;
    }
    deleteRow(row) {
        this.dataSource.data.splice(row.position - 1, 1);
        this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
        
            this._iService.deleteCollege(row).subscribe(response => {
                console.log(response);
            })

    }

    editRow(row) {
        this.router.navigate(['hr/addjd', {id:row.jobId}])
    }

}
