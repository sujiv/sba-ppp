import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application/loan-application.component';



@NgModule({
  declarations: [LoanApplicationComponent],
  exports: [
    LoanApplicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserApplicationModuleModule { }
