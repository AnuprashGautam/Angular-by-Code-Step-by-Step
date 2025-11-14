import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'login', component:Login}
];
