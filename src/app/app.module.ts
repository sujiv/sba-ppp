import { AppListModule } from './modules/app-list/app-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
