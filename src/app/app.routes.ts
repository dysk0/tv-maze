import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        'path': '',
        loadComponent: () =>
            import('./pages/home/home.component').then(
                (mod) => mod.HomeComponent
            ),

    },
    {
        'path': 'details/:showId',
        loadComponent: () =>
            import('./pages/details/details.component').then(
                (mod) => mod.DetailsComponent
            ),

    }, {
        'path': '**',
        loadComponent: () =>
            import('./pages/page-404/page-404.component').then(
                (mod) => mod.Page404Component
            ),

    }
];
