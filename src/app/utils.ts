import {MatSnackBar} from "@angular/material/snack-bar";

export class Utils {
  public static showSnackbar(snackBar: MatSnackBar, msg: string, isWarning: boolean = false) {
    const color: string = isWarning ? 'mat-warn' : 'mat-accent';
    snackBar.open(msg, '', {
      duration: 2500,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: ['mat-toolbar', color]
    });
  }
}
