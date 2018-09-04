import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

 displayedColumns: string[] = ['name', 'contactperson','university', 'mobileno', 'address', 'action'];
    dataSource:any = [];
    editData: any;
    dashMessage: String;
    createCollege: Boolean = false;
	
  constructor(private _iService: IconnectService, private dataService: DataService, private router:Router) { }

  ngOnInit() {
	  this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "College";
            this.createCollege = false;
            
                this._iService.getNewCollegeList().subscribe(response => {
                    let ELEMENT_DATA = response.payload.college;
                    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA)
                })
           
        });
        
    }
    createOrg() {
        this.createCollege = true;
    }
    deleteRow(row) {
        this.dataSource.data.splice(row.position - 1, 1);
        this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
        
            this._iService.deleteNewCollege(row).subscribe(response => {
                console.log(response);
            })
        
		/*
		else if (this.dashMessage === 'Corporate') {
            this._iService.deleteCorporate(row).subscribe(response => {
                console.log(response);
            })
        }*/
    }

    editRow(row) {
        this.router.navigate(['collegeAdmin/collegeList', {id:row.id}])
    }

}
