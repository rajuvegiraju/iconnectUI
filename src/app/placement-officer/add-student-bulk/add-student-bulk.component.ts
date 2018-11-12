import { Component, OnInit } from '@angular/core';
/*import {  FileUploader } from 'ng2-file-upload'; */
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';
import { UploadFileService } from '../../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-add-student-bulk',
  templateUrl: './add-student-bulk.component.html',
  styleUrls: ['./add-student-bulk.component.css']
})
export class AddStudentBulkComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService, private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private dataService: DataService, private _iService: IconnectService,) {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
  }

  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);

    const formdata: FormData = new FormData();
    formdata.append('file', this.selectedFiles.item(0));

    this._iService.uploadFile(formdata).subscribe(response => {
    debugger;
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Created");
          this.dataService.navData("College");
        } else {
          this._snackBar.error(response.mesgStr);
        }
        this.selectedFiles = null;
    });



/*
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    debugger;
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }

    });
 */
    
  }

}
