import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    //BrowserAnimationsModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fakeflix-site';
}
