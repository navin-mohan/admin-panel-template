import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffReportComponent } from './staff-report/staff-report.component';
import { SalaryReportComponent } from './salary-report/salary-report.component';
import { StudentsComponent } from './students/students.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CreateComponent } from './create/create.component';

import { route } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StaffReportComponent,
    SalaryReportComponent,
    StudentsComponent,
    TimetableComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    route,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
