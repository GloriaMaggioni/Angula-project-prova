import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ MatSidenavModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
   title= 'home-page'
}
