import { Component } from '@angular/core';
import { TitlePageComponent } from '../title-page/title-page.component';
import { FooterComponent } from "../footer/footer.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';





@Component({
  selector: 'app-sign-up',
  imports: [TitlePageComponent, FooterComponent,MatCardModule, MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
   btnLeft(){
    const btnLeft:any = document.querySelector('.btn-left') ;
  
      btnLeft.addEventListener('click', () =>{
        console.log('FUNZIONAAA')
      })
    }
   

}
