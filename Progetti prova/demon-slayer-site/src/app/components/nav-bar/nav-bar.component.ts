import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-nav-bar',
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 title = 'nav-bar';
}
