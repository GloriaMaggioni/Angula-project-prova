import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
  
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router){}

  goToLoginPage(){
    this.router.navigate(['login'])
  }

}
