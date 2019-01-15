import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatTabsModule, MatStepperModule, MatTooltipModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
    MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatTableModule,MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatFormFieldModule,MatSelectModule
} from '@angular/material';
//import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
    imports: [
        MatTabsModule, MatStepperModule, MatTooltipModule, CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    exports: [
        MatTabsModule, MatStepperModule, MatTooltipModule, CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatTableModule,MatCheckboxModule, MatDatepickerModule, MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    providers: [MatDatepickerModule]
})
export class MaterialModule { }
