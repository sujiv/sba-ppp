import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [LoanApplicationComponent],
  exports: [
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
  ]
})
export class UserApplicationModuleModule { }
