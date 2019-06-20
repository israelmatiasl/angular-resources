import { RouterModule, Routes, CanActivate } from '@angular/router';

const appRoutes : Routes = [
    {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
    }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash : false });