import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';




@Component({
  selector: 'app-sign-up',
  imports: [NavBarComponent, MatInputModule, MatFormFieldModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
