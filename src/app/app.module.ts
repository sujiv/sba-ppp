import { AppListModule } from './modules/app-list/app-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserApplicationModuleModule} from './modules/user-application-module/user-application-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppListModule,
    UserApplicationModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
