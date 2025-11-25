import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Admin } from './admin/admin';

export const routes: Routes = [
    // {path:'admin', component:Admin},                                                 // Eager Loading
    {path:'admin', loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)},       // Lazy Loading
    
];
