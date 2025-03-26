import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   title = 'Login Component' 



   onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    // console.log(email, password)
   }
}
