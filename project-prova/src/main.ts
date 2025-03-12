//COMPRENDE LA PAGINA HTML , QUINDI BODY CAMBIA TUTTO IL BODY DELLA PAGINA WEB

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
