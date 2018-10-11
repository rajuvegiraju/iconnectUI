import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

 
    displayedColumns: string[] = ['name', 'mobile', 'email', 'address', 'state', 'country', 'action'];
    dataSource: any = [{name:"Kumar Deva", mobile:"9938339383", email:"djsksajj@gmail.com", address:"sr peta, Tallapadu", state:"Andhra", country:"India"},
    {name:"Dev Jai", mobile:"8938839338", email:"devjai@gmail.com", address:"mg road, ulsoor", state:"Karnataka", country:"India"}];
    editData: any;
    dashMessage: String;
    createCollege: Boolean = false;

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "Student";
            this.createCollege = false;

            this._iService.getStudentsByCollegeId().subscribe(response => {
                let ELEMENT_DATA = response.payload.studentList;
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
    createOrg() {
        this.createCollege = true;
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

    editRow(row) {
        this.router.navigate(['po/addStudent', { id: row.id }]);
    }

}
