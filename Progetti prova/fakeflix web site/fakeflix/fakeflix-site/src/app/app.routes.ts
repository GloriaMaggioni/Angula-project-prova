import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'app-root', component: AppComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'nav-bar', component: NavBarComponent},
    {path: '', redirectTo: 'sign-up', pathMatch: 'full' },
];
