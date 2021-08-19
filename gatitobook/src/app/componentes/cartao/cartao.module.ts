import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';



@NgModule({
  declarations: [
    CartaoComponent
  ],
  exports: [
    CartaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartaoModule { }
