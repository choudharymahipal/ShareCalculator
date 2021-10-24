import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) {

  }

  openSnackBar() {
    this._snackBar.open("Work in progress. Please keep in touch.", "Close",{
      duration:2000
    });
  }

}
