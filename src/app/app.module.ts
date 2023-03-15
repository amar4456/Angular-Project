import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ButtonModule,
    SidebarModule,
    CalendarModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
