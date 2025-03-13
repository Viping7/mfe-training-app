import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";

export const routes: Routes =
    [
        { path: '', redirectTo: '/jokes', pathMatch: 'full' },
        {
            path: 'jokes',
            loadComponent: () =>
                import("./joke/joke.component")
                    .then((m) => m.JokeComponent)
        },
        {
            path: 'create',
            loadComponent: () =>
                loadRemoteModule({
                    type: 'module',
                    remoteEntry: MFE_APP_URL,
                    exposedModule: './Component'
                })
                    .then(m => m.CreateJokeComponent)
        },
    ];
