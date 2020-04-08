import { ApplyLoanComponent } from './modules/loan-app/apply-loan/apply-loan.component';
import { CommonModule } from '@angular/common';

import { AppListMainComponent } from './modules/app-list/app-list-main/app-list-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppReviewMainComponent} from './modules/app-review/app-review-main/app-review-main.component';


const routes: Routes = [
  { path: 'review', component: AppReviewMainComponent},
  { path: 'list', component: AppListMainComponent},
  { path: 'apply', component: ApplyLoanComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
