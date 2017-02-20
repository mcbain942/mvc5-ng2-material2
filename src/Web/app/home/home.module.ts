﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { HomeComponent } from './home.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule { }
