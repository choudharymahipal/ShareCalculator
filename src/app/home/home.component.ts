import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  ShowResult: boolean = false;

  MinProfit: number = 0;
  YouSpend: number = 0;
  Commission: number = 0;
  Profit: number = 0;
  YouEarn: number = 0;

  constructor(private _snackBar: MatSnackBar) {
    this.form = new FormGroup({
      MarketPrice: new FormControl(null, [Validators.required]),
      BuyPrice: new FormControl(null, [Validators.required]),
      TotalShare: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  OnSubmit() {
    debugger
    if (this.form.valid) {
      this.ShowResult = true;
      var _data = this.form.value;
      if (_data.MarketPrice > 0 && _data.BuyPrice > 0 && _data.TotalShare) {
        //  MinProfit
        this.MinProfit = (((_data.BuyPrice * _data.TotalShare) + 40) / _data.TotalShare);

        // YouSpend
        this.YouSpend = (_data.BuyPrice * _data.TotalShare);

        // Commission
        this.Commission = 40;

        // Profit
        this.Profit = (_data.MarketPrice * _data.TotalShare);

        // YouEarn
        this.YouEarn = (this.Profit - this.YouSpend);
      } else {
        this.ShowResult = false;
        this._snackBar.open("The value entered must be greater than zero.", "Close", {
          duration: 3000
        });
      }


    } else {
      this.ShowResult = false;
      this._snackBar.open("All fields are mendatory.", "Close", {
        duration: 3000
      });
    }
  }

  openSnackBar() {
    this._snackBar.open("Work in progress. Please keep in touch.", "Close", {
      duration: 3000
    });
  }

}
