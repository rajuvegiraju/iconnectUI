import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
/*import { SnackbarService } from '../../snackbar.service';*/
import { Router } from '@angular/router';

@Component({
    selector: 'app-internship-status',
    templateUrl: './internship-status.component.html',
    styleUrls: ['./internship-status.component.css']
})
export class InternshipStatusComponent implements OnInit {

    displayedColumns: string[] = ['studentName', 'email', 'course', 'stream', 'aggregate', 'status'];
    dataSource: any = [{studentName:"Nildubabu",email:"Nildubabu3829@gmail.com", course:"BE", stream:"ECE",aggregate:"72",status:"Inactive"},
    {studentName:"Joseph",email:"josepf3782@gmail.com", course:"Btech", stream:"CSE",aggregate:"65",status:"Active"}];

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {

    }
}
