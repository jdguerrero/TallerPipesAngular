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

  fecha2HorasAtras: Date;

  fecha12HorasAtras: Date;

  fecha8HorasAtras: Date;

  fecha18HorasAtras: Date;




  constructor(){

    this.fechaActual = new Date();

    /**
     * fecha actual en milisegundos menos 180000 milisegundos ... (3 min)
     */
    this.fecha3MinAtras = new Date(this.fechaActual.valueOf() - 180000);


    /**
     * fecha actual en milisegundos menos 7200000 milisegundos ... (2 horas)
     */
    this.fecha2HorasAtras = new Date(this.fechaActual.valueOf() - 7200000);


    /**
     * fecha actual en milisegundos menos 43200000 milisegundos ... (12 horas)
     */
    this.fecha12HorasAtras = new Date(this.fechaActual.valueOf() - 43200000);

    /**
     * fecha actual en milisegundos menos 28800000 milisegundos ... (8 horas)
     */
    this.fecha8HorasAtras = new Date(this.fechaActual.valueOf() - 28800000);

    /**
     * fecha actual en milisegundos menos 64800000 milisegundos ... (18 horas)
     */
    this.fecha18HorasAtras = new Date(this.fechaActual.valueOf() - 64800000);

  
  }

}
