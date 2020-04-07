import { AppListModule } from './modules/app-list/app-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppReviewMainComponent } from './modules/app-review/app-review-main/app-review-main.component';
import {AppReviewModule} from './modules/app-review/app-review.module';

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
    AppReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
