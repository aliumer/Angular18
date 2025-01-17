import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewLeaveComponent } from './pages/new-leave/new-leave.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { FeeComponent } from './pages/fee/fee.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'leave-request', component: NewLeaveComponent },
            { path: 'student', component: StudentRegistrationComponent },
            { path: 'fee/:ref', component: FeeComponent}
        ]
    }
];
