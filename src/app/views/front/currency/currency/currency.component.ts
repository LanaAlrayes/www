import { Component } from '@angular/core';
import { HttpService } from 'src/app/views/services/http.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  currjson: any = []

  base = 'USD'
  cont2 = 'USD'
  amount:any=[]
  rates:any=[]

  result: string = (this.amount * this.rates).toFixed(2)

  constructor(private http: HttpService) { }

  convert() {
    // console.log(this.base)
    // console.log(this.cont2)
    this.http.getCurrencydata(this.base).subscribe(data => {
      console.log(data)
      this.currjson = JSON.stringify(data)
      this.currjson = JSON.parse(this.currjson)

      if (this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD
      }

      if (this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR
      }

    })
  }

  changebase(a: string) {
    this.base = a
  }

  toCountry(b: string) {
    this.cont2 = b
  }
}
