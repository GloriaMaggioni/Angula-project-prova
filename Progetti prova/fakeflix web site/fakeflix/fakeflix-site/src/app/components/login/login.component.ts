import { Component, ElementRef, input, ViewChild, } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgIf } from '@angular/common';


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

 
 
 

}
