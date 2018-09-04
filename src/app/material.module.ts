import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
    MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule,
    MatTableModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatFormFieldModule,MatSelectModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule,
        MatTableModule, MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ],
    exports: [
        CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule,
        MatInputModule, MatSlideToggleModule, MatMenuModule, MatProgressBarModule,
        MatTableModule, MatSnackBarModule, MatCardModule, MatDialogModule,MatFormFieldModule,MatSelectModule
    ]
})
export class MaterialModule { }