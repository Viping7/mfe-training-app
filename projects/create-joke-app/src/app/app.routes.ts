import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/create-joke', pathMatch: 'full' },
    {
        path: 'create-joke',
        loadComponent: () =>
            import("./create-joke/create-joke.component")
                .then((m) => m.CreateJokeComponent)
    }
];