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
    dataSource: any = [];

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {

    }
}
