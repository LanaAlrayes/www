import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/views/services/http.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  MyForm: any;
  currencyData: any = {};
  currencyCodes = Object.keys(this.currencyData);
  resultText: string = 'Result appears here';

  ngOnInit() {
    this.MyForm = new FormGroup({
      amount: new FormControl(null, Validators.required),
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
    });
    this.getSymbols();
  }

  getSymbols() {
    let myHeaders: any = new Headers();
    myHeaders.append('apikey', 'hZqc0Gi4IrO3TFroyu46FDIe1Rh2CQgi');

    let requestOptions: any = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };
    fetch(
      'https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR%2CJPY%2CGBP%2CNGN&base=USD',
      requestOptions
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Failed to fetch data');
        }
        return response.text();
      })
      .then((result) => {
        this.currencyData = JSON.parse(result).rates;
        this.currencyCodes = Object.keys(this.currencyData).sort();

        console.log(this.currencyData);
      })
      .catch((err) => console.log(err.message));
  }

  convert(amount: number, from: string, to: string): number {
    let fromConversionCoefficient: number = this.currencyData[from];
    let toConversionCoefficient: number = this.currencyData[to];
    return (toConversionCoefficient / fromConversionCoefficient) * amount;
  }

  onSubmit() {
    if (this.MyForm.valid) {
      let amount: number = parseFloat(this.MyForm.get('amount').value);
      let convertFrom: string = this.MyForm.get('from').value;
      let convertTo: string = this.MyForm.get('to').value;

      let result = this.convert(amount, convertFrom, convertTo);
      result = parseFloat(result.toFixed(2)); // result to 2 decimal places
      this.resultText = `${amount} ${convertFrom} = ${result} ${convertTo}`;
    }
    // console.log(this.MyForm.valid)
  }
}
