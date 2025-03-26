
import {  Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { LogoutComponent } from './componets/logout/logout.component';
import { Pagina1Component } from './componets/pagina1/pagina1.component';
import { Pagina2Component } from './componets/pagina2/pagina2.component';
import { Pagina3Component } from './componets/pagina3/pagina3.component';
import { authGuard } from './auth/auth.guard';


//AUTHGUARD E CANACTIVATE (VECCHIO SITEMA)
// // import{ AuthGuard } from './auth/auth.guard';


// export const routes: Routes = [
//   {path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
//     {path:'', redirectTo: 'pagina1', pathMatch: 'full'},
//     {path:'pagina1', component: Pagina1Component},
//     {path:'pagina2', component: Pagina2Component},      
//     {path:'pagina3', component: Pagina3Component},
// ]},
//   {path: 'login', component: LoginComponent},
//   {path: 'logout', component: LogoutComponent}
// ];

//FINE AUTHGUARD

//NUOVO SISTEMA* FUNCTIONAL ROUTES GUARDS (CanActivateFn)
// export const routes: Routes = [
//     {path: '', component: HomeComponent, canActivate: [AuthService], children: [
//     {path:'', redirectTo: 'pagina1', pathMatch: 'full'},
//       {path:'pagina1', component: Pagina1Component},
//        {path:'pagina2', component: Pagina2Component},      
//        {path:'pagina3', component: Pagina3Component},
//    ]},
//    {path: 'login', component: LoginComponent},
//     {path: 'logout', component: LogoutComponent}
//  ];

export const routes: Routes = [
  {path: '', component: HomeComponent,canActivate: [authGuard],  children : [
    {path:'', redirectTo: 'pagina1', pathMatch: 'full'},
      {path:'pagina1', component: Pagina1Component},
      {path:'pagina2', component: Pagina2Component},      
      {path:'pagina3', component: Pagina3Component},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
]


export class AppRoutingModule{}