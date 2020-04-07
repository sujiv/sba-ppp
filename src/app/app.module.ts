import { AppListModule } from './modules/app-list/app-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReviewMainComponent } from './modules/app-review/app-review-main/app-review-main.component';
import {AppReviewModule} from './modules/app-review/app-review.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    AppReviewMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppListModule,
    AppReviewModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
