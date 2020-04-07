import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListMainComponent } from './app-list-main/app-list-main.component';



@NgModule({
    declarations: [AppListMainComponent],
    exports: [
        AppListMainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AppListModule { }
