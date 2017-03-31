import { RouterModule, Routes} from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { StaffReportComponent } from "./staff-report/staff-report.component";
import { CreateComponent } from "./create/create.component";
import { StudentsComponent } from "./students/students.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { SalaryReportComponent } from "./salary-report/salary-report.component";

export const routes: Routes = [
    {path: '',pathMatch: "full",redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'staffreport', component: StaffReportComponent},
    {path: 'create', component: CreateComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'timetable', component: TimetableComponent},
    {path: 'salaryreport', component: SalaryReportComponent},
];


export const route = RouterModule.forRoot(routes); 