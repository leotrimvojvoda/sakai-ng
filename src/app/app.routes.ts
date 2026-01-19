import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/component/app.layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Documentation } from './features/documentation/documentation';
import { Landing } from './features/landing/landing';
import { Notfound } from './features/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./features/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./features/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./features/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
