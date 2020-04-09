import { CertificationsComponent } from './modules/loan-app/certifications/certifications.component';
import { EligibilityComponent } from './modules/loan-app/eligibility/eligibility.component';
import { ApplyLoanComponent } from './modules/loan-app/apply-loan/apply-loan.component';
import { CommonModule } from '@angular/common';

import { AppListMainComponent } from './modules/app-list/app-list-main/app-list-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppReviewMainComponent} from './modules/app-review/app-review-main/app-review-main.component';


const routes: Routes = [
  { path: '', component: EligibilityComponent},
  { path: 'review/:appId', component: AppReviewMainComponent},
  { path: 'list', component: AppListMainComponent},
  { path: 'apply', component: ApplyLoanComponent},
  { path: 'eligibility', component: EligibilityComponent},
  { path: 'certification', component: CertificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
