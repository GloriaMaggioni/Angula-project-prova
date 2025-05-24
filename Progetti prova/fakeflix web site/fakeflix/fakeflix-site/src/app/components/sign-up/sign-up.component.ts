import { Component, HostListener, ViewChild } from '@angular/core';
import { TitlePageComponent } from '../title-page/title-page.component';
import { FooterComponent } from "../footer/footer.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { ElementRef } from '@angular/core';







@Component({
  selector: 'app-sign-up',
  imports: [TitlePageComponent, FooterComponent,MatCardModule, MatButtonModule, NgIf, NgFor],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
 constructor(){}
  //FUNZIONE DI SCORRIMENTO DELLE IMMAGINI
   @ViewChild("move" ) move!: ElementRef<HTMLDivElement>
   @ViewChild('btn-left') btnLeft!: ElementRef
     @ViewChild('btn-right') btnRight!: ElementRef
   
     ngAfterViewInit(){}

      
      scrollLeft(){
          this.move.nativeElement.scrollBy({left: 800, behavior: 'smooth'});
          this.btnLeft.nativeElement.style.position = 'fixed';
          this.btnRight.nativeElement.style.display = 'none';

          console.log()
      }
      scrollRight(){
        this.move.nativeElement.scrollBy({left: -800, behavior: 'smooth'});
        this.btnRight.nativeElement.style.display = 'fixed';

      }
     



 
//funzioni per le domande
  questions = [
    {question: "Cos'è Fakeflix?", answer: "Fakeflix è un servizio streaming che offre una vasta gamma di film, serie tv e documentari. Puoi guardarli dove e quando vuoi, su qualsiasi tipo di dispositivo"},
    {question: "Quanto costa Fakeflix?", answer: "Guarda Fakeflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming, il tutto per un importo mensile fisso.Nessun costo aggiunto"},
    {question:"Dove posso guardare Fakeflix?", answer: "Guarda Fakeflix dove vuoi, quando vuoi. Accedi al tuo account per guardare subito Fakeflix dal tuo computer oppure da qualsiasi dispositivo connesso a Internet che supporta l'app Fakeflix, come smart TV, smartphone, tablet, lettori multimediali per streaming e console per videogiochi. Con l'app per iOS o Android puoi anche scaricare i tuoi programmi preferiti. Usa la funzionalità di download per guardare i contenuti mentre sei in viaggio e senza connessione a Internet. Porta Fakeflix sempre con te."},
    {question: "Come posso disdire?", answer: "Fakeflix è flessibile. Nessun contratto fastidioso e nessun impegno.Puoi facilmente disdire il tuo contratto online con due clic: attiva o disdici il tuo account in qualsiasi momento."},
    {question: "Cosa posso guardare su Fakeflix?", answer: "Fakeflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime e tanto altro.Guarda tutto quello che vuoi, in qualsiasi momento."},
    {question: "Fakeflix è adatto hai bambini?", answer: "L'area Fakeflix Bambini, già inclusa nell'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli uno spazio dedicato dove guardare serie TV e film per tutta la famiglia.I profili Bambini hanno un filtro famiglia con PIN che ti permette di limitare l'accesso ai contenuti in base alla fascia d'età e bloccare la visione di titoli specifici."},
  ];

  activeIndex : number | null = null;

  showAnswer(index :number){
    this.activeIndex = this.activeIndex === index ? null : index;
  }


}
