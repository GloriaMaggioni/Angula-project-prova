import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-nav-bar',
  imports: [MatSidenavModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 title = 'nav-bar';
}
