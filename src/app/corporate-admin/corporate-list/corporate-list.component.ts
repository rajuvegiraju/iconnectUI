import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporate-list',
  templateUrl: './corporate-list.component.html',
  styleUrls: ['./corporate-list.component.css']
})
export class CorporateListComponent implements OnInit {

  
    displayedColumns: string[] = ['name', 'contactperson', 'mobileno', 'email', 'address', 'state', 'country', 'action'];
    dataSource: any = [];
    editData: any;
    dashMessage: String;
    createCollege: Boolean = false;

    constructor(private _iService: IconnectService, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.navMessage.subscribe(message => {
            this.dashMessage = "College";
            this.createCollege = false;

            this._iService.getCorporateList().subscribe(response => {
                let ELEMENT_DATA = response.payload.corporateList;
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

        this._iService.deleteNewCorporate(row.id).subscribe(response => {
            console.log(response);
        })
    }

    editRow(row) {
        this.router.navigate(['corporateAdmin/updateCorporate/'+row.id]);
    }

}
