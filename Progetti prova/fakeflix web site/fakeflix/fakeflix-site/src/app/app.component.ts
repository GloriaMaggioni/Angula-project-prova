import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
   RouterModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fakeflix-site';
}
