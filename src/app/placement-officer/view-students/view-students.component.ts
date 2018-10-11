import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  addStudentForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
      this.addStudentForm = this._formBuilder.group({
      'id': [''],
      'name': ['', Validators.required],
      'about': ['', Validators.required],
      'course': ['', Validators.required],
      'stream': ['', Validators.required],
      'college': ['', Validators.required],
      'university': ['', Validators.required],
      'city': ['', Validators.required],
      'yearOfPass':['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required]
    });


  }

  ngOnInit() {
  }

}
