import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Bienvenida } from './bienvenida/bienvenida';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path:'Bienvenida',
        component: Bienvenida
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'login',
    }

];
