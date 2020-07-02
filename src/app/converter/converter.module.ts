import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterComponent } from './components/converter.component';
import { CurrencyService } from './services';

@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService
  ]
})
export class ConverterModule { }
