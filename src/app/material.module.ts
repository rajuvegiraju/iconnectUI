import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatTooltipModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
    MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatTableModule,MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatFormFieldModule,MatSelectModule
} from '@angular/material';
//import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
    imports: [
        MatTooltipModule, CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    exports: [
        MatTooltipModule, CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatCheckboxModule, MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    providers: [MatDatepickerModule]
})
export class MaterialModule { }
