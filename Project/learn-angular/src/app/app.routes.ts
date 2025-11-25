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
    
    // {path:'', component:Home},
    // {path:'admin', component:Admin},
    {path:'admin', loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)},
    // {path:'about', component:About},
    // {path:'contact', component:Contact},
    // {path:'login', component:Login},
    // {path:'user/:id/:name', component:User},
    // {path:'profile', component:Profile, data:{name:'Anuprash Gautam'}},
    {path:'**', component:PageNotFound}
];
