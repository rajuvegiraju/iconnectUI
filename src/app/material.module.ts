import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
    MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatTableModule,MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatFormFieldModule,MatSelectModule
} from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
    imports: [
        MatFileUploadModule, CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatDatepickerModule, MatNativeDateModule,MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    exports: [
        CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    providers: [MatDatepickerModule]
})
export class MaterialModule { }