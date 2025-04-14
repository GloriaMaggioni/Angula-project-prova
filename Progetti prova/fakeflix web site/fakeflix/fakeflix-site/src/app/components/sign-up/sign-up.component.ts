import { Component } from '@angular/core';
import { TitlePageComponent } from '../title-page/title-page.component';
import { FooterComponent } from "../footer/footer.component";





@Component({
  selector: 'app-sign-up',
  imports: [TitlePageComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
