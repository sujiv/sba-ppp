import { CommonModule } from '@angular/common';

import { AppListMainComponent } from './modules/app-list/app-list-main/app-list-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'w', component: AppListMainComponent}
  // {path: '', component: HomePageComponent}, // Replace with your own main component
  // {path: 'details/:npi', component: DetailsviewComponent},
  // {path: '', component: SearchCompenentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
