import { Component } from '@angular/core';
import { TitlePageComponent } from '../title-page/title-page.component';
import { FooterComponent } from "../footer/footer.component";
import {MatCardModule} from '@angular/material/card';





@Component({
  selector: 'app-sign-up',
  imports: [TitlePageComponent, FooterComponent,MatCardModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
