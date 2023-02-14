import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ButtonModule,
    SidebarModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
