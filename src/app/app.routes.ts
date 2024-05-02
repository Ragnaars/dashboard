import { Routes } from '@angular/router';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ChartComponent } from './cliente/chart/chart.component';

export const routes: Routes = [
    {
        path: 'cliente-create',
        component: ClienteCreateComponent
    },
    {
        path: 'cliente-list',
        component: ClienteListComponent
    },
    {
        path: 'chart',
        component: ChartComponent
    }
];
