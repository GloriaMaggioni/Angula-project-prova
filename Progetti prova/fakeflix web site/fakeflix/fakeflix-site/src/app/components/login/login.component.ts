import { Component, signal } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-login',
  imports: [RouterModule, MatInputModule,  FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private route: Router){}

  goToSignUpPage(){
    this.route.navigate(['sign-up'])
  }

 emailFormControl = new FormControl('', [Validators.required, Validators.email])

   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
