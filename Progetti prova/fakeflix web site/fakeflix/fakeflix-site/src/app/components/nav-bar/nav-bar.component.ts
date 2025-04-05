import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-nav-bar',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
