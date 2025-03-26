import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet 
  ]
})

export class AppComponent {
  title = 'App Component';
}
