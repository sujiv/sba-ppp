import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { MaterialTable } from '../../models/material-table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ApplyLoanComponent],
  imports: [
    CommonModule,
    MaterialTable,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoanAppModule { }
