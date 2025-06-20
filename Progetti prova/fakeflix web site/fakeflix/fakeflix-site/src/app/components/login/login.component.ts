import { Component, } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgIf, NgStyle } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [RouterModule, MatInputModule,  FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule,NgStyle, NgIf ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {

  constructor(private route: Router){}


  myForm: FormGroup = new FormGroup ({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })


  onSubmit(){
    if(this.myForm.valid){
      console.log('Funziona', this.myForm.value)
    }else{
      console.log('Non funziona', this.myForm.value)
    }
  }

  

  goToSignUpPage(){
     this.route.navigate(['sign-up'])
   }

   backToSignUpPage(){
     this.route.navigate(['sign-up'])
   }

  goToHomePage(){
  this.route.navigate(['home-page'])
 }

  
}
