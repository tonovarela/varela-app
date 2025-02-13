import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./modules/admin/layout/admin-layout/admin-layout.component'),
        children: [
            { path: '', loadComponent: () => import('./modules/admin/pages/summary/summary.component') },
            { path: 'proyects', loadComponent: () => import('./modules/admin/pages/proyects/proyects.component') },

        ]
    },
    {
        path:'**', redirectTo: ''
    }
];
