import { Component, ElementRef, input, ViewChild, signal, HostListener, Renderer2} from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgIf, NgStyle } from '@angular/common';
import {merge} from 'rxjs';
import { error } from 'node:console';


@Component({
  selector: 'app-login',
  imports: [RouterModule, MatInputModule,  FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule,NgStyle ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
  @ViewChild('email') emailInput! : ElementRef <HTMLInputElement>
  @ViewChild('password') passwordInput! : ElementRef <HTMLInputElement>
  constructor(private route: Router, public renderer : Renderer2){}


  
  myForm: FormGroup = new FormGroup ({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
 
  errorStyle(){
    const email = this.emailInput.nativeElement;
    const password = this.passwordInput.nativeElement;
    
    if(this.myForm.invalid && this.myForm.touched){
      this.renderer.setStyle(email, 'border', '1px solid red')
       this.renderer.setStyle(password, 'border', '1px solid red')
    }else{
       this.renderer.setStyle(email, 'border', '1px solid gray')
       this.renderer.setStyle(password, 'border', '1px solid gray')

    }
  }










  goToSignUpPage(){
     this.route.navigate(['sign-up'])
   }

   backToSignUpPage(){
     this.route.navigate(['sign-up'])
   }



  
}
