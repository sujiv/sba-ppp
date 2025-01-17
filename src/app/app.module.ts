import { AppListModule } from './modules/app-list/app-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReviewMainComponent } from './modules/app-review/app-review-main/app-review-main.component';
import {AppReviewModule} from './modules/app-review/app-review.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LoanAppModule} from './modules/loan-app/loan-app.module';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    AppReviewMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppListModule,
    BrowserAnimationsModule,
    AppReviewModule,
    LoanAppModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
