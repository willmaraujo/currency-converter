import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { ConverterComponent } from './components/converter.component';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalPriceComponent } from './utils';

@NgModule({
  declarations: [ConverterComponent, NumberDirective, ModalPriceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
