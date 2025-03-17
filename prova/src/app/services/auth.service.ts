import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// IN QUESTO MODO FUNZIONA
export class AuthService {
  private loggedIn = true; // Simuliamo un utente non loggato

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(): void {
     this.loggedIn = true;
   }

   logout(): void {
     this.loggedIn = false;
   }

  // setLogin(login : boolean):void { ///anche cosi funziona
  //   if (login === true) {
  //     this.loggedIn = true;
  //   } else {
  //     this.loggedIn = false;
  //   }
  // }
  
}

//funziona anche cosi(va messo in un metodo ,come impostato in setLogin altrimenti non funziona)
//  if(login ===true){
//   this.loggedIn=true
// }else{
//    this.loggedIn=false;
//  }