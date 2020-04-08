import { AppRoutingModule } from './../../app-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialTable} from '../../models/material-table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppListMainComponent } from './app-list-main/app-list-main.component';
import { AppListViewComponent } from './app-list-view/app-list-view.component';



@NgModule({
  declarations: [AppListMainComponent, AppListViewComponent],
  imports: [
    CommonModule,
    MaterialTable,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppListModule { }

// platformBrowserDynamic().bootstrapModule(AppListModule)
//   .catch(err => console.error(err));
