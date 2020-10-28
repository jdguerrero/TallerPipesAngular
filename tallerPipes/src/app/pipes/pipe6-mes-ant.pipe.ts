import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe6MesAnt'
})
export class Pipe6MesAntPipe implements PipeTransform {

  date : Date;

  currentDate : Date;


  transform(fecha: string): string {

    this.currentDate = new Date();

    this.date = new Date(fecha);

    /**
     * validación fecha
     */
    if(this.date.getFullYear() == this.currentDate.getFullYear() && this.date.getMonth() == (this.currentDate.getMonth()-1)){

      return "Conectado el mes pasado";

    }else{
      return this.date.toDateString();
    }
    
  }
}
