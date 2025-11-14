import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'login', component:Login},
    {path:'**', component:PageNotFound}
];
