import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CurrencyModule { }
