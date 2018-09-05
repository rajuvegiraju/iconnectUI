import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {
    }
    success(message) {
        this.snackbar.open(message, "", {
            panelClass: ["snackbar-success"],
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        })
    }
    error(message) {
        this.snackbar.open(message, "", {
            panelClass: ["snackbar-error"],
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        })
    }
    warning(message) {
        this.snackbar.open(message, "", {
            panelClass: ["snackbar-warning"],
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        })
    }
}