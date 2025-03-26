import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

//CON IL SISTEMA VECCHIO (CANACTIVATE E AUTHGUARD)
// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if (authService.isLoggedIn()) {
//     return true; // Utente autenticato, può accedere
//   } else {
//     return router.createUrlTree(['/login']); // Utente non autenticato, lo reindirizziamo
//   }
// };


// METODO NUOVO (CANACTIVATEFN)---> FUNZIONA
export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
    return authService.isLoggedIn() ? true : router.createUrlTree(['/login']);
  };