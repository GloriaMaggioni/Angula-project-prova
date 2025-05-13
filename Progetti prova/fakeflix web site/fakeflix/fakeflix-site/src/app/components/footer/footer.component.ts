import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
 import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faSquareInstagram}from '@fortawesome/free-brands-svg-icons'
import{faAt}from '@fortawesome/free-solid-svg-icons'
import {faGithub}from '@fortawesome/free-brands-svg-icons';
import {faLinkedin}from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, 
    FontAwesomeModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faInstagram = faSquareInstagram;
  faAt = faAt;
  faGithub = faGithub;
  faLinkedin= faLinkedin;
}
