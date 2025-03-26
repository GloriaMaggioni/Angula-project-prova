import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

export const routes: Routes = [
    {path: 'home-page', component: HomePageComponent},
    {path: 'app-root', component: AppComponent},
    {path: '', redirectTo: 'home-page', pathMatch: 'full' },
    {path: 'nav-bar', component: NavBarComponent}
];
