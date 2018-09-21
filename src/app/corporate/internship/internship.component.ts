import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

   displayedColumns: string[] = ['title', 'duration', 'description', 'course', 'stipend','skill', 'action'];
    dataSource:any = [];
    editData: any;
    dashMessage: String;
    createJD: Boolean = false;
	
  constructor(private _iService: IconnectService, private dataService: DataService, private router:Router) { }

  ngOnInit() {
	  this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "College";
            this.createJD = true;
            
               /* this._iService.collegeList().subscribe(response => {
                    let ELEMENT_DATA = response.payload.college;
                    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
                }) */
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
        this.router.navigate(['superAdmin/collegeReg', {id:row.id}])
    }

}
