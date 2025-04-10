import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-sign-up',
  imports: [NavBarComponent, AppComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
