import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {  RouterModule  } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   title = 'Home Component'
}
