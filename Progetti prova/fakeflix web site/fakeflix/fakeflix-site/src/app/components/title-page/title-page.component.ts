import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-title-page',
  imports: [NavBarComponent, MatInputModule, MatFormFieldModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {

}
