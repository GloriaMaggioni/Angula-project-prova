import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [
    NavBarComponent,
    MatButtonModule,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    title = 'home-page'
}
