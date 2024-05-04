import { Routes } from '@angular/router';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ChartComponent } from './cliente/chart/chart.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';
export const routes: Routes = [
    {
        path: 'cliente-create',
        component: ClienteCreateComponent, canActivate: [authGuard]
    },
    {
        path: 'cliente-list',
        component: ClienteListComponent,  canActivate: [authGuard]
    },
    {
        path: 'chart',
        component: ChartComponent, canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent, 
    }
];
