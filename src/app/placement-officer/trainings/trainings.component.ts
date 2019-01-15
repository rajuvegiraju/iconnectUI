import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  addTraningForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.addTraningForm = this._formBuilder.group({
      'orgInstitute': [''],
      'trainName': [''],
      'emailId': ['', Validators.required],
      'mobileNo': [''],
      'title': [''],
      'description': ['', Validators.required],
      'startDate': ['', Validators.required],
      'endDate': [''],
      'duration': ['']
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    //  if (this.paramId) {
    //    this._iconnectService.getPendingApprovalForStudentRegById(this.paramId).subscribe(response => {
    //      this.selectedData = response.payload.student;
    //      this.addTraningForm.setValue({
    //        id:this.selectedData.id,
    //        name: this.selectedData.name,
    //        mobile:this.selectedData.mobile,
    //        email:this.selectedData.email ,
    //        registerNo:null,
    //        dob:null,
    //        gender:null,
    //        course:null,
    //        stream:null,
    //        yearOfPass:null
    //      });
    //    })
    //  }
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = message;
    })
  }

  onSubmit() {
   
      this._iconnectService.addNewStudent(this.addTraningForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Uploaded..");
          this.router.navigateByUrl('/po/studentList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error(response.mesgStr);
        }
      })
    
  }

}
