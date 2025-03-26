import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent  {
 @Input () text : string = ''
 @Input() color: string = ''
 @Output() btnClick = new EventEmitter()

  constructor(){}
 

  onClick(){
   this.btnClick.emit();
  }
}