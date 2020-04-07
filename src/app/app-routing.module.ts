import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppReviewMainComponent} from './modules/app-review/app-review-main/app-review-main.component';


const routes: Routes = [
  { path: 'review', component: AppReviewMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
