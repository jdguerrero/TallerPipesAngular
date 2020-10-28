import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tallerPipes';

  fechaActual : Date;

  fecha3MinAtras : Date;


  constructor(){

    this.fechaActual = new Date();

    /**
     * fecha actual en milisegundos menos 180000 milisegundos ... (3 min)
     */
    this.fecha3MinAtras = new Date(this.fechaActual.valueOf() - 180000);

  
  }

}
